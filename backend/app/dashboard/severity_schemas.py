from pydantic import BaseModel

class SeverityChartItem(BaseModel):

    name:str

    value:int