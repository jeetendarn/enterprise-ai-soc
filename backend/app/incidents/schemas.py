from pydantic import BaseModel, ConfigDict


class IncidentCreate(BaseModel):
    title: str
    description: str
    severity: str
    status: str
    asset_id: int
    user_id: int
    threat_id: int | None = None


class IncidentUpdate(BaseModel):
    title: str
    description: str
    severity: str
    status: str


class IncidentResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    title: str
    description: str
    severity: str
    status: str
    asset_id: int
    user_id: int
    threat_id: int | None


class IncidentList(BaseModel):
    incidents: list[IncidentResponse]