from app.assets.schemas import AssetCreate
from app.assets.service import AssetService
from app.db.session import SessionLocal

db = SessionLocal()

service = AssetService(db)

asset = service.create_asset(
    AssetCreate(
        hostname="WIN-001",
        ip_address="192.168.1.10",
        asset_type="Windows Server",
        operating_system="Windows Server 2022",
        department="Finance",
        owner="IT Team",
        criticality="Critical",
        status="Online",
    )
)

print(asset.id)
print(asset.hostname)

db.close()