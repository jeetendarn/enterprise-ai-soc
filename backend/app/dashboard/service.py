from app.dashboard.repository import DashboardRepository


class DashboardService:

    def __init__(self, db):
        self.repo = DashboardRepository(db)

    def get_summary(self):
        return self.repo.summary()
    
    def threat_trend(self):

        return self.repo.threat_trend()