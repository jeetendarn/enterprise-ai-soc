from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.db.dependencies import get_db

from app.ioc_matching.schemas import (
    IOCMatchRequest,
    IOCMatchResponse,
)

from app.ioc_matching.service import IOCMatchingService

router = APIRouter(
    prefix="/ioc",
    tags=["IOC Matching"],
)


@router.post(
    "/match",
    response_model=IOCMatchResponse,
)
def match_ioc(
    request: IOCMatchRequest,
    db: Session = Depends(get_db),
):

    return IOCMatchingService(db).match_ioc(request)