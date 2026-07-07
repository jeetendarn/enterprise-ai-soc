from app.db.session import SessionLocal
from app.threats.schemas import ThreatCreate
from app.threats.service import ThreatService

db = SessionLocal()

service = ThreatService(db)

threat = service.create_threat(
    ThreatCreate(
        name="Known Malware IP",
        description="Known C2 server",
        threat_type="IP",
        severity="High",
        confidence=95,
        ioc_value="45.33.32.156",
        source="AbuseIPDB",
        status="Active",
    )
)

print(threat.id)
print(threat.name)

db.close()