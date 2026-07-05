from app.db.base import BaseModel
from app.db.models.users import User

class User(BaseModel):
    __tablename__ = "users"

    