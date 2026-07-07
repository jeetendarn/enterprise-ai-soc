from sqlalchemy import ForeignKey
from sqlalchemy import String
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from app.db.base import BaseModel


class IncidentEvent(BaseModel):

    __tablename__ = "incident_events"

    incident_id: Mapped[int] = mapped_column(
        ForeignKey("incidents.id"),
        nullable=False,
    )

    event_type: Mapped[str] = mapped_column(
        String(50),
        nullable=False,
    )

    message: Mapped[str] = mapped_column(
        String(500),
        nullable=False,
    )

    performed_by: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    incident = relationship(
        "Incident",
        back_populates="events",
    )