import uuid

from fastapi import Request


async def add_request_id(request: Request, call_next):
    """
    Generate a unique Request ID for every incoming request.
    """

    request_id = str(uuid.uuid4())

    request.state.request_id = request_id

    response = await call_next(request)

    response.headers["X-Request-ID"] = request_id

    return response