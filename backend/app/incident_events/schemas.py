from pydantic import BaseModel
from pydantic import ConfigDict


class IncidentEventCreate(BaseModel):

    incident_id: int
    event_type: str
    message: str
    performed_by: str


class IncidentEventResponse(BaseModel):

    model_config = ConfigDict(from_attributes=True)

    id: int
    incident_id: int
    event_type: str
    message: str
    performed_by: str


class IncidentTimeline(BaseModel):

    events: list[IncidentEventResponse]