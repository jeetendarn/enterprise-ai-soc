import time

from fastapi import Request

from app.core.logger import logger


async def log_requests(request: Request, call_next):
    """
    Logs every incoming request and outgoing response.
    """

    start_time = time.perf_counter()

    response = await call_next(request)

    duration = (time.perf_counter() - start_time) * 1000

    logger.info(
        "[%s] %s %s | Status=%s | Duration=%.2f ms",
        request.state.request_id,
        request.method,
        request.url.path,
        response.status_code,
        duration,
    )

    return response