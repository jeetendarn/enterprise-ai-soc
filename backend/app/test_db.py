from sqlalchemy import create_engine, text

DATABASE_URL = "postgresql+psycopg://soc_admin:soc_password@localhost:5432/enterprise_ai_soc"

print("Creating engine...")

engine = create_engine(
    DATABASE_URL,
    echo=True,
)

try:
    with engine.connect() as conn:
        print("✅ Connected")
        print(conn.execute(text("SELECT current_user")).scalar())
        print(conn.execute(text("SELECT current_database()")).scalar())
        print(conn.execute(text("SELECT version()")).scalar())
except Exception as e:
    print("❌ Failed")
    import traceback
    traceback.print_exc()