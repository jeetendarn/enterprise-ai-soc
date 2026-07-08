from sqlalchemy import select
from sqlalchemy.orm import Session

from app.incident_events.models import IncidentEvent


class IncidentEventRepository:

    def __init__(self, db: Session):
        self.db = db

    def create(self, event: IncidentEvent):
        self.db.add(event)
        self.db.commit()
        self.db.refresh(event)
        return event

    def get_by_incident(self, incident_id: int):
        return self.db.scalars(
            select(IncidentEvent)
            .where(
                IncidentEvent.incident_id == incident_id
            )
            .order_by(
                IncidentEvent.created_at.asc()
            )
        ).all()