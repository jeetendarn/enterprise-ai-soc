from datetime import datetime

from sqlalchemy import DateTime, func
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
# from app.users.models import User
# from app.assets.models import Asset
# from app.threats.models import Threat
# from app.incidents.models import Incident

class Base(DeclarativeBase):
    pass


class BaseModel(Base):

    __abstract__ = True

    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )