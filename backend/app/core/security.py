from datetime import UTC, datetime, timedelta

from jose import jwt
from pwdlib import PasswordHash

from app.core.config import settings

password_hash = PasswordHash.recommended()


def hash_password(password: str) -> str:
    return password_hash.hash(password)


def verify_password(password: str, hashed: str) -> bool:
    return password_hash.verify(password, hashed)


def create_access_token(
    data: dict,
    expires_minutes: int = 60,
):
    to_encode = data.copy()

    expire = datetime.now(UTC) + timedelta(
        minutes=expires_minutes
    )

    to_encode["exp"] = expire

    return jwt.encode(
        to_encode,
        settings.JWT_SECRET_KEY,
        algorithm=settings.JWT_ALGORITHM,
    )