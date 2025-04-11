from fastapi import APIRouter, HTTPException, Depends
from .carbon_quantification_model import carbon_model, QuantificationRequest, QuantificationResponse, DepartmentInput

# Create router for carbon quantification
router = APIRouter(
    prefix="/api/carbon",
    tags=["carbon"],
    responses={404: {"description": "Not found"}},
)

@router.post("/quantify", response_model=QuantificationResponse)
async def quantify_emissions(request: QuantificationRequest):
    """
    Calculate carbon emissions based on department data
    
    This endpoint takes department-wise input data and returns:
    - Total emissions in kg CO₂
    - Carbon credits required
    - Department-wise emissions breakdown
    - Activity-wise emissions breakdown
    """
    try:
        # Validate that we have at least one department
        if not request.departments or len(request.departments) == 0:
            raise HTTPException(
                status_code=400, 
                detail="At least one department must be provided"
            )
        
        # Process the data using our model
        result = carbon_model.predict(request.departments)
        return result
        
    except Exception as e:
        # Log the error in a production environment
        raise HTTPException(
            status_code=500,
            detail=f"Error processing quantification request: {str(e)}"
        )

@router.get("/emission-factors")
async def get_emission_factors():
    """Get the emission factors used in calculations"""
    from .carbon_quantification_model import EMISSION_FACTORS
    
    return {
        "emission_factors": {k: v for k, v in EMISSION_FACTORS.items()},
        "units": {
            "Energy Usage (MWh)": "kg CO₂/MWh",
            "Fuel Consumption (L)": "kg CO₂/L",
            "Industrial Output (tons)": "kg CO₂/ton",
            "Waste Generated (tons)": "kg CO₂/ton",
            "Transport Distance (km)": "kg CO₂/km"
        }
    }

@router.get("/example")
async def get_example_request():
    """Get an example request body for the quantify endpoint"""
    example = QuantificationRequest(
        departments=[
            DepartmentInput(
                name="Manufacturing",
                energy_usage=300.0,
                fuel_consumption=500.0,
                industrial_output=340.0,
                waste_generated=450.0,
                transport_distance=550.0
            ),
            DepartmentInput(
                name="Logistics",
                energy_usage=650.0,
                fuel_consumption=50.0,
                industrial_output=3.0,
                waste_generated=5.0,
                transport_distance=45.0
            ),
            DepartmentInput(
                name="Marketing",
                energy_usage=5.0,
                fuel_consumption=4500.0,
                industrial_output=450.0,
                waste_generated=40.0,
                transport_distance=6500.0
            )
        ]
    )
    
    return example 