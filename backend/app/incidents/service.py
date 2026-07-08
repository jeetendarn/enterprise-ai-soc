from sqlalchemy.orm import Session

from app.incidents.models import Incident
from app.incidents.schemas import IncidentCreate
from app.incident_events.schemas import IncidentEventCreate
from app.incident_events.service import IncidentEventService


class IncidentService:

    def __init__(self, db: Session):
        self.db = db

    def create_incident(
        self,
        incident_data: IncidentCreate,
    ):

        incident = Incident(
            **incident_data.model_dump()
        )

        self.db.add(incident)
        self.db.commit()
        self.db.refresh(incident)

        IncidentEventService(self.db).log_event(
            IncidentEventCreate(
                incident_id=incident.id,
                event_type="CREATED",
                message="Incident created.",
                performed_by="system",
            )
        )

        return incident