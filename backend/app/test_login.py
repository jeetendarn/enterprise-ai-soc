from app.auth.service import AuthService
from app.db.session import SessionLocal

db = SessionLocal()

service = AuthService(db)

token = service.login(
    "admin@example.com",
    "Password123!",
)

print(token)

db.close()