from sqlalchemy import select
from sqlalchemy.orm import Session

from app.incident_events.models import IncidentEvent
from app.incident_events.schemas import IncidentEventCreate


class IncidentEventService:

    def __init__(self, db: Session):
        self.db = db

    def log_event(
        self,
        event_data: IncidentEventCreate,
    ):

        event = IncidentEvent(
            **event_data.model_dump()
        )

        self.db.add(event)
        self.db.commit()
        self.db.refresh(event)

        return event

    def get_timeline(
        self,
        incident_id: int,
    ):

        stmt = (
            select(IncidentEvent)
            .where(
                IncidentEvent.incident_id == incident_id
            )
            .order_by(
                IncidentEvent.created_at
            )
        )

        return self.db.execute(stmt).scalars().all()