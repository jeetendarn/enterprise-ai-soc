from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db.models.assets import Asset


class AssetRepository:

    def __init__(self, db: Session):
        self.db = db

    def create(self, asset: Asset) -> Asset:

        self.db.add(asset)
        self.db.commit()
        self.db.refresh(asset)

        return asset

    def get_all(self) -> list[Asset]:

        return list(
            self.db.scalars(
                select(Asset)
            )
        )

    def get_by_id(
        self,
        asset_id: int,
    ) -> Asset | None:

        return self.db.get(
            Asset,
            asset_id,
        )

    def get_by_hostname(
        self,
        hostname: str,
    ) -> Asset | None:

        return self.db.scalar(
            select(Asset).where(
                Asset.hostname == hostname
            )
        )

    def get_by_ip(
        self,
        ip_address: str,
    ) -> Asset | None:

        return self.db.scalar(
            select(Asset).where(
                Asset.ip_address == ip_address
            )
        )

    def update(
        self,
        asset: Asset,
    ) -> Asset:

        self.db.commit()
        self.db.refresh(asset)

        return asset

    def delete(
        self,
        asset: Asset,
    ) -> None:

        self.db.delete(asset)
        self.db.commit()