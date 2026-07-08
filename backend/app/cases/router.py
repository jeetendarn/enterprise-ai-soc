from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.db.dependencies import get_db

from app.cases.schemas import (
    CaseCreate,
    CaseUpdate,
    CaseResponse,
    CaseList,
)

from app.cases.service import CaseService

router = APIRouter(
    prefix="/cases",
    tags=["Cases"],
)


@router.post(
    "/",
    response_model=CaseResponse,
)
def create_case(
    case: CaseCreate,
    db: Session = Depends(get_db),
):
    return CaseService(db).create_case(case)


@router.get(
    "/",
    response_model=CaseList,
)
def get_cases(
    db: Session = Depends(get_db),
):
    return {
        "cases":
        CaseService(db).get_all_cases()
    }


@router.get(
    "/{case_id}",
    response_model=CaseResponse,
)
def get_case(
    case_id: int,
    db: Session = Depends(get_db),
):
    return CaseService(db).get_case(case_id)


@router.put(
    "/{case_id}",
    response_model=CaseResponse,
)
def update_case(
    case_id: int,
    case: CaseUpdate,
    db: Session = Depends(get_db),
):
    return CaseService(db).update_case(
        case_id,
        case,
    )


@router.delete(
    "/{case_id}",
)
def delete_case(
    case_id: int,
    db: Session = Depends(get_db),
):
    CaseService(db).delete_case(case_id)

    return {
        "message": "Case deleted successfully."
    }