from pydantic_settings import BaseSettings


class AppSettings(BaseSettings):
    APP_NAME: str
    APP_VERSION: str
    DEBUG: bool
    HOST: str
    PORT: int
    LOG_LEVEL: str