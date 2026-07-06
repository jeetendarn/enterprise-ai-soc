from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.assets.schemas import AssetCreate
from app.assets.schemas import AssetList
from app.assets.schemas import AssetResponse
from app.assets.schemas import AssetUpdate
from app.assets.service import AssetService

from app.auth.dependencies import get_admin_user
from app.auth.dependencies import get_current_user

from app.db.dependencies import get_db


router = APIRouter(
    prefix="/assets",
    tags=["Assets"],
)


@router.post(
    "",
    response_model=AssetResponse,
)
def create_asset(
    data: AssetCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_admin_user),
):

    service = AssetService(db)

    try:

        return service.create_asset(data)

    except ValueError as e:

        raise HTTPException(
            status_code=400,
            detail=str(e),
        )


@router.get(
    "",
    response_model=AssetList,
)
def list_assets(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):

    service = AssetService(db)

    return {
        "assets": service.list_assets()
    }


@router.get(
    "/{asset_id}",
    response_model=AssetResponse,
)
def get_asset(
    asset_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):

    service = AssetService(db)

    try:

        return service.get_asset(asset_id)

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )


@router.put(
    "/{asset_id}",
    response_model=AssetResponse,
)
def update_asset(
    asset_id: int,
    data: AssetUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_admin_user),
):

    service = AssetService(db)

    try:

        return service.update_asset(
            asset_id,
            data,
        )

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )


@router.delete(
    "/{asset_id}",
)
def delete_asset(
    asset_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_admin_user),
):

    service = AssetService(db)

    try:

        service.delete_asset(asset_id)

        return {
            "message": "Asset deleted successfully."
        }

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )