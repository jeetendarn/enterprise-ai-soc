from app.threats.models import Threat
from app.threats.repository import ThreatRepository
from app.threats.schemas import ThreatCreate
from app.threats.schemas import ThreatUpdate

from app.threats.repository import ThreatRepository


class ThreatService:

    def __init__(self, db):
        self.repository = ThreatRepository(db)

    def create_threat(self, threat):
        return self.repository.create(threat)

    def get_all_threats(self):
        return self.repository.get_all()

    def get_threat(self, threat_id):
        return self.repository.get_by_id(threat_id)

    def update_threat(
        self,
        threat_id,
        threat,
    ):
        return self.repository.update(
            threat_id,
            threat,
        )

    def delete_threat(
        self,
        threat_id,
    ):
        return self.repository.delete(
            threat_id
        )