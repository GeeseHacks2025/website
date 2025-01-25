from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict
import uvicorn

app = FastAPI()


@app.get("/")

# Basic health check endpoint
@app.get("/")
async def read_root() -> Dict[str, str]:
    return {"status": "healthy"}


@app.get("/chat")
async def chat(request: Request) -> Dict[str, str]:
    return {"status": "healthy"}

@app.get("/models")
async def models() -> Dict[str, str]:
    return {"status": "healthy"}


@app.get("/metrics")
async def metrics() -> Dict[str, str]:
    return {"status": "healthy"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)