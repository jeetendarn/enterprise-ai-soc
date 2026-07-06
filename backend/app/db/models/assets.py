from sqlalchemy import String

from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

from app.db.base import BaseModel


class Asset(BaseModel):

    __tablename__ = "assets"

    hostname: Mapped[str] = mapped_column(
        String(150),
        unique=True,
        nullable=False,
    )

    ip_address: Mapped[str] = mapped_column(
        String(50),
        unique=True,
        nullable=False,
    )

    asset_type: Mapped[str] = mapped_column(
        String(50),
        nullable=False,
    )

    operating_system: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    department: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    owner: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    criticality: Mapped[str] = mapped_column(
        String(20),
        nullable=False,
        default="Medium",
    )

    status: Mapped[str] = mapped_column(
        String(20),
        nullable=False,
        default="Online",
    )