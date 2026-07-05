# from fastapi import APIRouter

# from app.api.routes.database import router as database_router
# from app.api.routes.health import router as health_router

# api_router = APIRouter()

# # -------------------------
# # Health APIs
# # -------------------------

# api_router.include_router(
#     health_router,
#     tags=["Health"],
# )

# # -------------------------
# # Database APIs
# # -------------------------

# api_router.include_router(
#     database_router,
#     tags=["Database"],
# )
from fastapi import APIRouter

from app.api.routes.database import router as database_router
from app.api.routes.health import router as health_router

api_router = APIRouter()

api_router.include_router(health_router)

api_router.include_router(database_router)