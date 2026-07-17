from sqlalchemy import func

from app.db.models.assets import Asset
from app.incidents.models import Incident
from app.threats.models import Threat
from app.cases.models import Case
from sqlalchemy import func
from sqlalchemy import extract
from app.threats.models import Threat


class DashboardRepository:

    def __init__(self, db):
        self.db = db

    def summary(self):

        return {

            "total_assets":
                self.db.query(func.count(Asset.id)).scalar(),

            "online_assets":
                self.db.query(func.count(Asset.id))
                .filter(Asset.status == "Online")
                .scalar(),

            "total_incidents":
                self.db.query(func.count(Incident.id)).scalar(),

            "open_incidents":
                self.db.query(func.count(Incident.id))
                .filter(Incident.status == "Open")
                .scalar(),

            "total_threats":
                self.db.query(func.count(Threat.id)).scalar(),

            "active_threats":
                self.db.query(func.count(Threat.id))
                .filter(Threat.status == "Active")
                .scalar(),

            "total_cases":
                self.db.query(func.count(Case.id)).scalar(),

            "open_cases":
                self.db.query(func.count(Case.id))
                .filter(Case.status == "Open")
                .scalar(),
        }
    def threat_trend(self):

        rows = (
            self.db.query(
                extract("dow", Threat.created_at).label("day"),
                func.count(Threat.id),
            )
            .group_by(
                extract("dow", Threat.created_at)
            )
            .all()
        )

        names = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
        ]

        result = []

        for day, count in rows:

            result.append({

                "day": names[int(day)],

                "threats": count,

            })

        return result
    
    def severity_distribution(self):

        rows=(

            self.db.query(

                Threat.severity,

                func.count(Threat.id),

            )

            .group_by(Threat.severity)

            .all()

        )

        return [

            {

                "name":severity,

                "value":count,

            }

            for severity,count in rows

        ]