from pydantic import BaseModel
from pydantic import ConfigDict


class AssetCreate(BaseModel):

    hostname: str
    ip_address: str
    asset_type: str
    operating_system: str
    department: str
    owner: str

    criticality: str = "Medium"
    status: str = "Online"


class AssetUpdate(BaseModel):

    hostname: str
    ip_address: str
    asset_type: str
    operating_system: str
    department: str
    owner: str
    criticality: str
    status: str


class AssetResponse(BaseModel):

    model_config = ConfigDict(from_attributes=True)

    id: int
    hostname: str
    ip_address: str
    asset_type: str
    operating_system: str
    department: str
    owner: str
    criticality: str
    status: str


class AssetList(BaseModel):

    assets: list[AssetResponse]