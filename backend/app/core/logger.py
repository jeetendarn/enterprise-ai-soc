import logging
import sys

from app.core.config import settings


def configure_logging() -> None:
    """
    Configure application logging.
    """

    logging.basicConfig(
        level=getattr(logging, settings.LOG_LEVEL.upper()),
        format="%(asctime)s | %(levelname)-8s | %(name)s | %(message)s",
        handlers=[
            logging.StreamHandler(sys.stdout),
        ],
    )


configure_logging()

logger = logging.getLogger("enterprise-ai-soc")