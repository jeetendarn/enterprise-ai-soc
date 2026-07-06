from app.assets.repository import AssetRepository
from app.assets.schemas import AssetCreate
from app.assets.schemas import AssetUpdate
from app.db.models.assets import Asset

from sqlalchemy.orm import Session


class AssetService:

    def __init__(self, db: Session):

        self.repository = AssetRepository(db)

    def create_asset(
        self,
        data: AssetCreate,
    ) -> Asset:

        if self.repository.get_by_hostname(data.hostname):

            raise ValueError(
                "Hostname already exists."
            )

        if self.repository.get_by_ip(data.ip_address):

            raise ValueError(
                "IP address already exists."
            )

        asset = Asset(

            hostname=data.hostname,

            ip_address=data.ip_address,

            asset_type=data.asset_type,

            operating_system=data.operating_system,

            department=data.department,

            owner=data.owner,

            criticality=data.criticality,

            status=data.status,
        )

        return self.repository.create(asset)

    def list_assets(self):

        return self.repository.get_all()

    def get_asset(
        self,
        asset_id: int,
    ):

        asset = self.repository.get_by_id(asset_id)

        if not asset:

            raise ValueError(
                "Asset not found."
            )

        return asset

    def update_asset(
        self,
        asset_id: int,
        data: AssetUpdate,
    ):

        asset = self.get_asset(asset_id)

        asset.hostname = data.hostname
        asset.ip_address = data.ip_address
        asset.asset_type = data.asset_type
        asset.operating_system = data.operating_system
        asset.department = data.department
        asset.owner = data.owner
        asset.criticality = data.criticality
        asset.status = data.status

        return self.repository.update(asset)

    def delete_asset(
        self,
        asset_id: int,
    ):

        asset = self.get_asset(asset_id)

        self.repository.delete(asset)