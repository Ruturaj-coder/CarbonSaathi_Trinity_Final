from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import simulation, gemini_routes, marketplace
from simulation import carbon_routes

app = FastAPI(
    title="CarbonSaathi API",
    description="API for carbon emissions simulation and reduction strategies",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Add routers
app.include_router(simulation.router)
app.include_router(carbon_routes.router)
app.include_router(gemini_routes.router)
app.include_router(marketplace.router)

@app.get("/")
async def root():
    return {
        "message": "Welcome to CarbonSaathi API",
        "docs": "/docs",
        "version": "1.0.0"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 