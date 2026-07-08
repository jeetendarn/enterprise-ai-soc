from sqlalchemy import select
from sqlalchemy.orm import Session

from app.threats.models import Threat
from app.incidents.schemas import IncidentCreate
from app.incidents.service import IncidentService

from app.ioc_matching.schemas import (
    IOCMatchRequest,
    IOCMatchResponse,
)


class IOCMatchingService:

    def __init__(self, db: Session):
        self.db = db

    def match_ioc(
        self,
        request: IOCMatchRequest,
    ) -> IOCMatchResponse:

        stmt = (
            select(Threat)
            .where(
                Threat.ioc_value == request.ioc_value
            )
        )

        threat = self.db.execute(stmt).scalar_one_or_none()

        if threat is None:
            return IOCMatchResponse(
                matched=False,
                message="IOC not found in threat intelligence.",
            )

        incident = IncidentService(self.db).create_incident(
            IncidentCreate(
                title=f"IOC Match: {threat.ioc_value}",
                description=f"Threat Intelligence matched IOC '{threat.ioc_value}'.",
                severity=threat.severity,
                status="Open",
                asset_id=request.asset_id,
                user_id=request.user_id,
                threat_id=threat.id,
            )
        )

        return IOCMatchResponse(
            matched=True,
            threat_id=threat.id,
            incident_id=incident.id,
            message="IOC matched successfully.",
        )