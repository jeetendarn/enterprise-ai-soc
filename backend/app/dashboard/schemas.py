from pydantic import BaseModel


class DashboardSummary(BaseModel):
    total_assets: int
    online_assets: int
    total_incidents: int
    open_incidents: int
    total_threats: int
    active_threats: int
    total_cases: int
    open_cases: int