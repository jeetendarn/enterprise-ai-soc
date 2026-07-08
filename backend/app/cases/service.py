from sqlalchemy import select
from sqlalchemy.orm import Session

from app.cases.models import Case
from app.cases.schemas import (
    CaseCreate,
    CaseUpdate,
)


class CaseService:

    def __init__(self, db: Session):
        self.db = db

    def create_case(
        self,
        case_data: CaseCreate,
    ):
        case = Case(
            **case_data.model_dump()
        )

        self.db.add(case)
        self.db.commit()
        self.db.refresh(case)

        return case

    def get_all_cases(self):
        stmt = select(Case)

        return self.db.execute(
            stmt
        ).scalars().all()

    def get_case(
        self,
        case_id: int,
    ):
        stmt = select(Case).where(
            Case.id == case_id
        )

        return self.db.execute(
            stmt
        ).scalar_one_or_none()

    def update_case(
        self,
        case_id: int,
        case_data: CaseUpdate,
    ):
        case = self.get_case(case_id)

        if not case:
            return None

        for key, value in case_data.model_dump().items():
            setattr(case, key, value)

        self.db.commit()
        self.db.refresh(case)

        return case

    def delete_case(
        self,
        case_id: int,
    ):
        case = self.get_case(case_id)

        if not case:
            return None

        self.db.delete(case)
        self.db.commit()

        return case