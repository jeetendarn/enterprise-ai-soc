# from fastapi import APIRouter, Depends

# from sqlalchemy.orm import Session

# from app.auth.dependencies import get_current_user
# from app.db.dependencies import get_db
# from app.threats.schemas import (
#     ThreatCreate,
#     ThreatResponse,
#     ThreatList,
# )
# from app.threats.service import ThreatService

# router = APIRouter(
#     prefix="/threats",
#     tags=["Threat Intelligence"],
# )


# # @router.get(
# #     "",
# #     response_model=ThreatList,
# # )
# # def list_threats(
# #     db: Session = Depends(get_db),
# #     current_user=Depends(get_current_user),
# # ):
# #     service = ThreatService(db)

# #     return ThreatList(
# #         threats=service.get_all_threats()
# #     )


# # @router.post(
# #     "",
# #     response_model=ThreatResponse,
# # )
# # def create_threat(
# #     threat: ThreatCreate,
# #     db: Session = Depends(get_db),
# #     current_user=Depends(get_current_user),
# # ):
# #     service = ThreatService(db)

# #     return service.create_threat(threat)


# # @router.get(
# #     "/{threat_id}",
# #     response_model=ThreatResponse,
# # )
# # def get_threat(
# #     threat_id: int,
# #     db: Session = Depends(get_db),
# #     current_user=Depends(get_current_user),
# # ):
# #     service = ThreatService(db)

# #     return service.get_threat(threat_id)


# # @router.put(
# #     "/{threat_id}",
# #     response_model=ThreatResponse,
# # )
# # def update_threat(
# #     threat_id: int,
# #     threat: ThreatCreate,
# #     db: Session = Depends(get_db),
# #     current_user=Depends(get_current_user),
# # ):
# #     service = ThreatService(db)

# #     return service.update_threat(
# #         threat_id,
# #         threat,
# #     )


# # @router.delete(
# #     "/{threat_id}",
# # )
# # def delete_threat(
# #     threat_id: int,
# #     db: Session = Depends(get_db),
# #     current_user=Depends(get_current_user),
# # ):
# #     service = ThreatService(db)

# #     service.delete_threat(threat_id)

# #     return {
# #         "message": "Threat deleted successfully."
# #     }
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.dependencies import get_db
from app.threats.schemas import ThreatCreate, ThreatResponse, ThreatList
from app.threats.service import ThreatService

router = APIRouter(
    prefix="/threats",
    tags=["Threat Intelligence"],
)


@router.get("", response_model=ThreatList)
def list_threats(db: Session = Depends(get_db)):
    service = ThreatService(db)
    return ThreatList(
        threats=service.get_all_threats()
    )


@router.post("", response_model=ThreatResponse)
def create_threat(
    threat: ThreatCreate,
    db: Session = Depends(get_db),
):
    service = ThreatService(db)
    return service.create_threat(threat)


@router.get("/{threat_id}", response_model=ThreatResponse)
def get_threat(
    threat_id: int,
    db: Session = Depends(get_db),
):
    service = ThreatService(db)
    return service.get_threat(threat_id)


@router.put("/{threat_id}", response_model=ThreatResponse)
def update_threat(
    threat_id: int,
    threat: ThreatCreate,
    db: Session = Depends(get_db),
):
    service = ThreatService(db)
    return service.update_threat(
        threat_id,
        threat,
    )


@router.delete("/{threat_id}")
def delete_threat(
    threat_id: int,
    db: Session = Depends(get_db),
):
    service = ThreatService(db)
    service.delete_threat(threat_id)
    return {
        "message": "Threat deleted successfully."
    }