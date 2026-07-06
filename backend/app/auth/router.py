from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.auth.schemas import LoginRequest
from app.auth.schemas import TokenResponse
from app.auth.service import AuthService
from app.db.dependencies import get_db

from app.auth.dependencies import get_current_user
from app.db.models import User
from app.auth.dependencies import get_admin_user
from app.auth.dependencies import get_analyst_user

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)

@router.post(
    "/login",
    response_model=TokenResponse,
)
def login(
    request: LoginRequest,
    db: Session = Depends(get_db),
):
    service = AuthService(db)

    try:
        return service.login(
            request.email,
            request.password,
        )

    except ValueError as e:
        raise HTTPException(
            status_code=401,
            detail=str(e),
        )

@router.get("/me")
def get_me(
    current_user: User = Depends(get_current_user),
):
    return {
        "id": current_user.id,
        "email": current_user.email,
        "username": current_user.username,
        "role": current_user.role,
    }

@router.get("/admin")
def admin_dashboard(
    current_user: User = Depends(get_admin_user),
):
    return {
        "message": "Welcome Admin",
        "user": current_user.username,
    }

@router.get("/analyst")
def analyst_dashboard(
    current_user: User = Depends(get_analyst_user),
):
    return {
        "message": "SOC Analyst Dashboard",
        "user": current_user.username,
    }