from sqlalchemy import create_engine

from app.core.config import settings
from app.core.config import settings

engine = create_engine(
    settings.DATABASE_URL,
    echo=settings.DEBUG,
    future=True,
)

# from sqlalchemy import create_engine, text
# from app.core.config import settings

# print("=" * 60)
# print("DATABASE_URL:", settings.DATABASE_URL)
# print("=" * 60)

# engine = create_engine(
#     settings.DATABASE_URL,
#     echo=True,
# )

# try:
#     with engine.connect() as conn:
#         print("CONNECTED SUCCESSFULLY")
#         print(conn.execute(text("SELECT current_user")).scalar())
#         print(conn.execute(text("SELECT current_database()")).scalar())
# except Exception as e:
#     print("FAILED TO CONNECT")
#     print(repr(e))
#     raise