from datetime import datetime

from fastapi import APIRouter

from app.core.config import settings

from app.core.logger import logger
from app.core.exceptions.custom_exceptions import (
    ResourceNotFoundException,
)

router = APIRouter()


@router.get(
    "/health",
    tags=["Health"],
    summary="Application Health Check",
)
async def health():
    return {
        "status": "healthy",
        "service": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "timestamp": datetime.utcnow().isoformat(),
    }

@router.get("/logs")
async def test_logs():
    logger.info("Testing logging endpoint")

    return {
        "message": "Log generated successfully."
    }

@router.get("/error")
async def test_error():
    raise ResourceNotFoundException("Alert")

# from fastapi import APIRouter

# router = APIRouter()


# @router.get("/health")
# def health_check():
#     return {
#         "status": "healthy",
#         "service": "enterprise-ai-soc",
#     }