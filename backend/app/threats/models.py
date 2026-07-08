from sqlalchemy import String

from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

from app.db.base import BaseModel
from sqlalchemy.orm import relationship


class Threat(BaseModel):

    __tablename__ = "threats"

    name: Mapped[str] = mapped_column(
        String(200),
        nullable=False,
    )

    description: Mapped[str] = mapped_column(
        String(1000),
        nullable=False,
    )

    threat_type: Mapped[str] = mapped_column(
        String(50),
        nullable=False,
    )

    severity: Mapped[str] = mapped_column(
        String(20),
        nullable=False,
    )

    confidence: Mapped[int] = mapped_column(
        nullable=False,
        default=50,
    )

    ioc_value: Mapped[str] = mapped_column(
        String(255),
        unique=True,
        nullable=False,
    )

    source: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    status: Mapped[str] = mapped_column(
        String(20),
        nullable=False,
        default="Active",
    )

    incidents = relationship(
    "Incident",
    back_populates="threat",
)