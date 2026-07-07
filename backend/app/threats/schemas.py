from pydantic import BaseModel
from pydantic import ConfigDict


class ThreatCreate(BaseModel):

    name: str
    description: str
    threat_type: str
    severity: str
    confidence: int
    ioc_value: str
    source: str
    status: str


class ThreatUpdate(BaseModel):

    name: str
    description: str
    threat_type: str
    severity: str
    confidence: int
    ioc_value: str
    source: str
    status: str


class ThreatResponse(BaseModel):

    model_config = ConfigDict(
        from_attributes=True
    )

    id: int
    name: str
    description: str
    threat_type: str
    severity: str
    confidence: int
    ioc_value: str
    source: str
    status: str


class ThreatList(BaseModel):

    threats: list[ThreatResponse]