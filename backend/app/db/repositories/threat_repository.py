from sqlalchemy import select
from sqlalchemy.orm import Session

from app.threats.models import Threat


class ThreatRepository:

    def __init__(self, db: Session):
        self.db = db

    def create(self, threat: Threat) -> Threat:
        self.db.add(threat)
        self.db.commit()
        self.db.refresh(threat)
        return threat

    def get_by_id(self, threat_id: int) -> Threat | None:
        statement = select(Threat).where(
            Threat.id == threat_id
        )
        return self.db.scalar(statement)

    def get_by_ioc(self, ioc: str) -> Threat | None:
        statement = select(Threat).where(
            Threat.ioc_value == ioc
        )
        return self.db.scalar(statement)

    def get_all(self) -> list[Threat]:
        statement = select(Threat)
        return list(self.db.scalars(statement).all())

    def delete(self, threat: Threat):
        self.db.delete(threat)
        self.db.commit()

    def update(self):
        self.db.commit()