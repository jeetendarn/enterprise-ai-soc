Enterprise AI SOC

Current Version
v0.1.0

Completed Modules
✅ Authentication
✅ Users
✅ Assets

Pending Modules
⬜ Threat Intelligence
⬜ Incidents
⬜ SIEM
⬜ AI Engine

Database Tables
users
assets

API Endpoints

POST /auth/login
GET /auth/me
POST /users/register
GET /assets
POST /assets
PUT /assets/{id}
DELETE /assets/{id}

Folder Structure

app/
auth/
users/
assets/
...

Dependencies

FastAPI
SQLAlchemy
Alembic
PostgreSQL
Redis (future)
Celery (future)

Known Decisions

JWT Authentication
Argon2 Password Hashing
Repository Pattern
Service Layer
RBAC