from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.router import api_router
from app.core.config import settings
from app.core.exceptions.handlers import register_exception_handlers
from app.core.logger import logger
from app.core.middleware.request_id import add_request_id
from app.core.middleware.request_logger import log_requests

from app.core.config import settings

print(settings.DATABASE_URL)

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info(
        "Starting Enterprise AI SOC Backend | Version=%s | Debug=%s",
        settings.APP_VERSION,
        settings.DEBUG,
    )

    yield

    logger.info("Stopping Enterprise AI SOC Backend")


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="""
Enterprise AI Security Operations Center

Features

    • SIEM
    • Threat Intelligence
    • AI SOC Analyst
    • Incident Response
    • IOC Management
""",
    debug=settings.DEBUG,
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
)


# -------------------------------------------------------
# Register Exception Handlers
# -------------------------------------------------------

register_exception_handlers(app)


# -------------------------------------------------------
# Middleware
# -------------------------------------------------------

@app.middleware("http")
async def request_id_middleware(request, call_next):
    return await add_request_id(request, call_next)


@app.middleware("http")
async def request_logging_middleware(request, call_next):
    return await log_requests(request, call_next)


# -------------------------------------------------------
# CORS
# -------------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -------------------------------------------------------
# Root Endpoint
# -------------------------------------------------------

@app.get("/", tags=["Root"])
async def root():
    return {
        "message": "Welcome to Enterprise AI SOC Backend",
        "version": settings.APP_VERSION,
        "docs": "/docs",
        "health": "/api/v1/health",
    }


# -------------------------------------------------------
# API Router
# -------------------------------------------------------

app.include_router(
    api_router,
    prefix="/api/v1",
)

