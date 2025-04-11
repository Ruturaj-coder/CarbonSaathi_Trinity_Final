"""
Gemini API Routes
Endpoints for the AI-powered recommendations using Google's Gemini API
"""

from fastapi import APIRouter, HTTPException, Depends, Query
from pydantic import BaseModel
from typing import List, Dict, Any, Optional
import json
import re
from services.gemini_service import gemini_service

router = APIRouter(
    prefix="/api/gemini",
    tags=["gemini"],
    responses={404: {"description": "Not found"}},
)

# Request/Response Models
class SinkData(BaseModel):
    total_emissions: float
    total_sequestration: float
    years_to_neutrality: int
    sinks: List[Dict[str, Any]]
    emission_gap: Optional[float] = None

class ScenarioConstraints(BaseModel):
    budget: str
    timeline: str
    priorities: List[str]

class ExplanationRequest(BaseModel):
    topic: str

def convert_usd_to_inr(text: str) -> str:
    """Convert USD amounts in text to INR"""
    if not text or not isinstance(text, str):
        return text
        
    # USD to INR conversion factor
    usd_to_inr = 83.0
    
    # Function to replace USD values
    def replace_usd(match):
        amount = float(match.group(1).replace(',', ''))
        inr_amount = int(amount * usd_to_inr)
        return f"₹{inr_amount:,}"
    
    # Replace $X,XXX patterns
    return re.sub(r'\$(\d{1,3}(?:,\d{3})*(?:\.\d+)?)', replace_usd, text)

def process_json_response(response_data):
    """Process a JSON response to convert any USD values to INR"""
    if isinstance(response_data, dict):
        for key, value in response_data.items():
            if isinstance(value, str):
                response_data[key] = convert_usd_to_inr(value)
            elif isinstance(value, (list, dict)):
                response_data[key] = process_json_response(value)
    elif isinstance(response_data, list):
        for i, item in enumerate(response_data):
            response_data[i] = process_json_response(item)
    return response_data

@router.post("/sink-recommendations")
async def get_sink_recommendations(sink_data: SinkData):
    """
    Generate AI-powered recommendations for enhancing carbon sinks
    """
    try:
        recommendations = await gemini_service.get_sink_recommendations(sink_data.dict())
        # Process the recommendations to convert USD to INR
        return process_json_response(recommendations)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/carbon-science-explanation")
async def get_carbon_science_explanation(request: ExplanationRequest):
    """
    Generate explanations about carbon science topics
    """
    try:
        # Log the topic for debugging
        print(f"Generating explanation for topic: {request.topic}")
        
        # Get the explanation from the service
        explanation = await gemini_service.get_carbon_science_explanation(request.topic)
        
        # Log the raw response for debugging
        print(f"Raw explanation response: {explanation}")
        
        # Process the explanation to convert USD to INR and ensure proper structure
        processed_explanation = process_json_response(explanation)
        
        # Ensure the response has the expected keys
        if not processed_explanation.get("explanation"):
            processed_explanation["explanation"] = f"No explanation found for '{request.topic}'"
        
        if not processed_explanation.get("key_facts") or not isinstance(processed_explanation["key_facts"], list):
            processed_explanation["key_facts"] = []
            
        if not processed_explanation.get("relevance_to_neutrality"):
            processed_explanation["relevance_to_neutrality"] = ""
        
        return processed_explanation
    except Exception as e:
        print(f"Error generating carbon science explanation: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/enhancement-scenarios")
async def generate_enhancement_scenarios(
    sink_data: SinkData,
    constraints: str = Query(None, description="JSON string of scenario constraints")
):
    """
    Generate multiple enhancement scenarios based on user constraints
    """
    try:
        # Parse the constraints from the query parameter
        if constraints:
            constraints_dict = json.loads(constraints)
        else:
            # Default constraints if none provided
            constraints_dict = {
                "budget": "Medium (₹41,50,000 - ₹83,00,000)",  # Updated to INR
                "timeline": "1-2 years",
                "priorities": ["Cost-effectiveness", "Speed"]
            }
        
        scenarios = await gemini_service.generate_enhancement_scenarios(
            sink_data.dict(), 
            constraints_dict
        )
        # The backend service should already convert USD to INR,
        # but we'll process again to ensure all values are converted
        return process_json_response(scenarios)
    except json.JSONDecodeError:
        raise HTTPException(status_code=422, detail="Invalid constraints format")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 