from sqlalchemy import select
from sqlalchemy.orm import Session

from app.threats.models import Threat


class ThreatRepository:

    def __init__(self, db):
        self.db = db
        
    def create(self, threat):
        obj = Threat(**threat.model_dump())

        self.db.add(obj)

        self.db.commit()

        self.db.refresh(obj)

        return obj
    
    def get_all(self):
        statement = select(Threat)

        return self.db.scalars(
            statement
        ).all()
    
    def get_by_id(
    self,
    threat_id,
):
        statement = (
            select(Threat)
            .where(
                Threat.id == threat_id
            )
        )

        return self.db.scalar(statement)
    
    def update(
    self,
    threat_id,
    threat,
):
        obj = self.get_by_id(threat_id)

        if not obj:
            return None

        data = threat.model_dump()

        for key, value in data.items():
            setattr(
                obj,
                key,
                value,
            )

        self.db.commit()

        self.db.refresh(obj)

        return obj
    
    def delete(
    self,
    threat_id,
):
        obj = self.get_by_id(threat_id)

        if obj:
            self.db.delete(obj)

            self.db.commit()