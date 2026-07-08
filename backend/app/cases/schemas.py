from pydantic import BaseModel, ConfigDict


class CaseCreate(BaseModel):
    title: str
    description: str
    incident_id: int
    status: str = "Open"


class CaseUpdate(BaseModel):
    title: str
    description: str
    status: str


class CaseResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    title: str
    description: str
    status: str
    incident_id: int


class CaseList(BaseModel):
    cases: list[CaseResponse]