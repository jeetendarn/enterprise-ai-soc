from app.db.session import SessionLocal
from app.users.schemas import UserCreate
from app.users.service import UserService

db = SessionLocal()

service = UserService(db)

user = service.create_user(
    UserCreate(
        email="admin@example.com",
        username="admin",
        password="Password123!",
    )
)

print(user.id)
print(user.email)
print(user.username)

db.close()