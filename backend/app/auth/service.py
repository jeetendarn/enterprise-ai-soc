from sqlalchemy.orm import Session

from app.auth.repository import UserRepository
from app.core.security import hash_password
from app.db.models.users import User
from app.users.schemas import UserCreate


class AuthService:

    def __init__(self):

        self.repository = UserRepository()

    def register_user(
        self,
        db: Session,
        data: UserCreate,
    ) -> User:

        if self.repository.get_by_email(
            db,
            data.email,
        ):
            raise ValueError("Email already exists")

        if self.repository.get_by_username(
            db,
            data.username,
        ):
            raise ValueError("Username already exists")

        user = User(
            email=data.email,
            username=data.username,
            password_hash=hash_password(data.password),
        )

        return self.repository.create(
            db,
            user,
        )