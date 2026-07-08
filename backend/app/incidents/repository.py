from sqlalchemy import select
from sqlalchemy.orm import Session

from app.incidents.models import Incident


class IncidentRepository:

    def __init__(self, db: Session):
        self.db = db

    def create(self, incident: Incident):
        self.db.add(incident)
        self.db.commit()
        self.db.refresh(incident)
        return incident

    def get_by_id(self, incident_id: int):
        return self.db.get(
            Incident,
            incident_id,
        )

    def get_all(self):
        return self.db.scalars(
            select(Incident)
        ).all()

    def update(self, incident: Incident):
        self.db.commit()
        self.db.refresh(incident)
        return incident

    def delete(self, incident: Incident):
        self.db.delete(incident)
        self.db.commit()