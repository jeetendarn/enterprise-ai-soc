from pydantic import BaseModel


class IOCMatchRequest(BaseModel):
    ioc_value: str
    asset_id: int
    user_id: int


class IOCMatchResponse(BaseModel):
    matched: bool
    threat_id: int | None = None
    incident_id: int | None = None
    message: str