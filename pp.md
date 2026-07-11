You are continuing development of my Enterprise AI SOC Platform backend.

IMPORTANT:
Do not redesign the project.
Do not rename modules.
Do not change folder structure.
Continue exactly from the current architecture.

=========================================================
PROJECT
=========================================================

Project:
Enterprise AI SOC Platform

Backend:
FastAPI
Python 3.14

Database:
PostgreSQL

ORM:
SQLAlchemy 2.0

Migration:
Alembic

Authentication:
JWT

Architecture:
Feature-based modular architecture

=========================================================
CURRENT PROJECT STATUS
=========================================================

Completed Modules

app/auth/
Authentication

app/users/
User Management

app/db/models/assets.py
Asset Management

app/threats/
Threat Intelligence

app/incidents/
Incident CRUD

app/incident_events/
Incident Timeline

app/ioc_matching/
IOC Matching Engine

app/cases/
Case Management

=========================================================
CURRENT DATABASE TABLES
=========================================================

users

assets

threats

incidents

incident_events

cases

=========================================================
CURRENT FOLDER STRUCTURE
=========================================================

backend/

app/

api/
v1/

auth/

cases/
__init__.py
models.py
router.py
schemas.py
service.py

core/

db/
base.py
dependencies.py
engine.py
session.py

models/
__init__.py
assets.py
users.py

incident_events/

incidents/

ioc_matching/

threats/

users/

main.py

alembic/

versions/

=========================================================
WORKING APIs
=========================================================

Authentication

Users

Assets

Threats

Incidents

Incident Events

IOC Matching

Cases

=========================================================
CASE MODULE
=========================================================

CRUD implemented

POST

GET

GET/{id}

PUT

DELETE

Relationships

Case

↓

Incident

↓

Threat

↓

Asset

↓

User

=========================================================
IMPORTANT HISTORY
=========================================================

A previous Alembic migration for the Cases table was accidentally deleted.

The alembic_version table referenced a missing revision.

The issue was fixed by:

1.
Updating alembic_version

2.
Generating a new migration

3.
Applying upgrade

The current migration chain is healthy.

Do NOT regenerate old migrations.

=========================================================
CODING RULES
=========================================================

Always use:

Feature-based architecture

SQLAlchemy ORM

Pydantic schemas

Dependency Injection

Services

Routers

Repository pattern where useful

Type hints

No shortcuts

No duplicate code

No breaking changes

Do not modify existing APIs unless necessary.

=========================================================
NEXT DEVELOPMENT PHASE
=========================================================

Start with:

Alert Management

Then

Correlation Engine

Detection Rules

Threat Hunting

AI SOC Analyst

SOAR

Timeline Analytics

Risk Scoring

MITRE ATT&CK Mapping

Threat Intelligence Enrichment

Real-time WebSockets

Background Workers

=========================================================
IMPORTANT
=========================================================

Before adding any feature:

Review the existing project structure.

Reuse existing patterns.

Keep the code production-ready.

Never skip any required file.

Whenever a new module is created, provide:

1. Folder structure

2. Every filename

3. Complete code for every file

4. Alembic migration

5. Testing steps

6. API verification

Continue from the latest completed backend state without rebuilding or refactoring existing modules.