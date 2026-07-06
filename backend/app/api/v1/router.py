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

# from fastapi import APIRouter

# from app.api.routes.database import router as database_router
# from app.api.routes.health import router as health_router

# api_router = APIRouter()

# api_router.include_router(health_router)

# api_router.include_router(database_router)

from fastapi import APIRouter

from app.api.routes.health import router as health_router
from app.api.routes.database import router as database_router
from app.auth.router import router as auth_router
from app.users.router import router as users_router
from app.assets.router import router as assets_router

api_router = APIRouter()

api_router.include_router(health_router)
api_router.include_router(database_router)
api_router.include_router(auth_router)
api_router.include_router(users_router)
api_router.include_router(assets_router)