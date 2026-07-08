from sqlalchemy import String
from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from app.db.base import BaseModel


class Case(BaseModel):

    __tablename__ = "cases"

    title: Mapped[str] = mapped_column(
        String(200),
        nullable=False,
    )

    description: Mapped[str] = mapped_column(
        String(1000),
        nullable=False,
    )

    status: Mapped[str] = mapped_column(
        String(30),
        default="Open",
    )

    priority: Mapped[str] = mapped_column(
        String(20),
        default="Medium",
    )

    assigned_to: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False,
    )

    incident_id: Mapped[int] = mapped_column(
        ForeignKey("incidents.id"),
        nullable=False,
    )

    analyst = relationship(
        "User",
    )

    incident = relationship(
        "Incident",
    )