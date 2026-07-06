from sqlalchemy.orm import Session

from app.auth.jwt import create_access_token
from app.core.security import verify_password
from app.db.repositories.user_repository import UserRepository

class AuthService:

    def __init__(self, db: Session):

        self.repository = UserRepository(db)

    def login(
        self,
        email: str,
        password: str,
    ):

        user = self.repository.get_by_email(email)

        if user is None:

            raise ValueError(
                "Invalid email or password."
            )

        if not verify_password(
            password,
            user.password_hash,
        ):

            raise ValueError(
                "Invalid email or password."
            )

        token = create_access_token(
            {
                "sub": user.email,
            }

            
        )

      
        return {
        "access_token": token,
        "token_type": "bearer",
        "user": user,
    }
    

# class AuthService:

#     def __init__(self):

#         self.repository = UserRepository()

#     def register_user(
#         self,
#         db: Session,
#         data: UserCreate,
#     ) -> User:

#         if self.repository.get_by_email(
#             db,
#             data.email,
#         ):
#             raise ValueError("Email already exists")

#         if self.repository.get_by_username(
#             db,
#             data.username,
#         ):
#             raise ValueError("Username already exists")

#         user = User(
#             email=data.email,
#             username=data.username,
#             password_hash=hash_password(data.password),
#         )

#         return self.repository.create(
#             db,
#             user,
#         )