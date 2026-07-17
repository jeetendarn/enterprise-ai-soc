from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.db.dependencies import get_db

from app.auth.dependencies import get_current_user

from app.dashboard.schemas import DashboardSummary
from app.dashboard.service import DashboardService

from app.dashboard.chart_schemas import ThreatTrendPoint

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"],
)


@router.get(
    "/summary",
    response_model=DashboardSummary,
)
def summary(
    db: Session = Depends(get_db),
):
    
    service = DashboardService(db)

    return service.get_summary()

@router.get(
    "/threat-trend",
    response_model=list[ThreatTrendPoint],
)
def threat_trend(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):

    service = DashboardService(db)

    return service.threat_trend()