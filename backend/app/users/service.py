from sqlalchemy.orm import Session

from app.core.security import hash_password
from app.db.models import User
from app.db.repositories.user_repository import UserRepository
from app.users.schemas import UserCreate


class UserService:

    def __init__(self, db: Session):

        self.repository = UserRepository(db)

    def create_user(
        self,
        data: UserCreate,
    ) -> User:

        if self.repository.get_by_email(data.email):

            raise ValueError(
                "Email already exists."
            )

        if self.repository.get_by_username(
            data.username
        ):

            raise ValueError(
                "Username already exists."
            )

        user = User(

            email=data.email,

            username=data.username,

            password_hash=hash_password(
                data.password
            ),

        )

        return self.repository.create(user)

    def get_user(
        self,
        user_id: int,
    ) -> User | None:

        return self.repository.get_by_id(
            user_id
        )

    def get_users(self):

        return self.repository.get_all()

    def delete_user(
        self,
        user_id: int,
    ):

        user = self.repository.get_by_id(
            user_id
        )

        if user is None:

            raise ValueError(
                "User not found."
            )

        self.repository.delete(user)