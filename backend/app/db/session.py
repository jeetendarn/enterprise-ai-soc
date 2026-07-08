from sqlalchemy.orm import sessionmaker

from app.db.engine import engine

# Force SQLAlchemy to register all models
from app.db import models

SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False,
    expire_on_commit=False,
)