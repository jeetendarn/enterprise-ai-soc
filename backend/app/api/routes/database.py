from fastapi import APIRouter, Depends
from sqlalchemy import text
from sqlalchemy.orm import Session

from app.db.base import Base

from app.db.dependencies import get_db

router = APIRouter()


@router.get("/database", tags=["Database"])
async def database_health(
    db: Session = Depends(get_db),
):
    result = db.execute(text("SELECT version();"))

    version = result.scalar()

    return {
        "status": "connected",
        "database": version,
    }


@router.get("/tables", tags=["Database"])
async def list_tables():
    return {
        "tables": list(Base.metadata.tables.keys())
    }