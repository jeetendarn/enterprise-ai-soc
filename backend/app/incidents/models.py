from sqlalchemy import ForeignKey
from sqlalchemy import String
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from app.db.base import BaseModel
from sqlalchemy.orm import relationship

class Incident(BaseModel):

    __tablename__ = "incidents"

    title: Mapped[str] = mapped_column(
        String(200),
        nullable=False,
    )

    description: Mapped[str] = mapped_column(
        String(1000),
        nullable=False,
    )

    severity: Mapped[str] = mapped_column(
        String(20),
        nullable=False,
    )

    status: Mapped[str] = mapped_column(
        String(30),
        default="Open",
    )

    asset_id: Mapped[int] = mapped_column(
        ForeignKey("assets.id"),
        nullable=False,
    )

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False,
    )

    threat_id: Mapped[int | None] = mapped_column(
        ForeignKey("threats.id"),
        nullable=True,
    )

    asset = relationship(
        "Asset",
        back_populates="incidents",
    )

    user = relationship(
        "User",
        back_populates="incidents",
    )

    threat = relationship(
        "Threat",
        back_populates="incidents",
    )
    events = relationship(
    "IncidentEvent",
    back_populates="incident",
    cascade="all, delete-orphan",
)