from pydantic import BaseModel

class ThreatTrendPoint(BaseModel):
    day: str
    threats: int