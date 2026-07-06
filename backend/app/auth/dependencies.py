from fastapi import Depends
from fastapi import HTTPException
from fastapi.security import HTTPAuthorizationCredentials
from fastapi.security import HTTPBearer
from sqlalchemy.orm import Session

from app.auth.jwt import decode_access_token
from app.auth.repository import UserRepository
from app.db.dependencies import get_db
from app.db.models import User
from fastapi import HTTPException


security = HTTPBearer()


def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db),
) -> User:

    token = credentials.credentials

    payload = decode_access_token(token)

    if payload is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid or expired token.",
        )

    email = payload.get("sub")

    if email is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid token.",
        )

    repository = UserRepository(db)

    user = repository.get_by_email(email)

    if user is None:
        raise HTTPException(
            status_code=401,
            detail="User not found.",
        )

    return user



def require_admin(
    current_user: User = Depends(get_current_user),
) -> User:

    if current_user.role != "admin":
        raise HTTPException(
            status_code=403,
            detail="Admin privileges required.",
        )

    return current_user


def require_analyst(
    current_user: User = Depends(get_current_user),
) -> User:

    if current_user.role not in [
        "admin",
        "analyst",
    ]:
        raise HTTPException(
            status_code=403,
            detail="Analyst privileges required.",
        )

    return current_user