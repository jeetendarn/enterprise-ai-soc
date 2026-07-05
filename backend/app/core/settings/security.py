from pydantic_settings import BaseSettings


class SecuritySettings(BaseSettings):
    SECRET_KEY: str