from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Dict, Any, Optional
import numpy as np
import pandas as pd
import os

# Create a router for simulation API
router = APIRouter(
    prefix="/api/simulation",
    tags=["simulation"],
    responses={404: {"description": "Not found"}},
)

# Data models
class EmissionSource(BaseModel):
    source: str
    amount: float
    unit: str = "tCO2e"

class BusinessProfile(BaseModel):
    industry: str
    size: Optional[str] = None
    location: Optional[str] = None
    annual_revenue: Optional[float] = None

class Priorities(BaseModel):
    cost_importance: float = 0.33
    timeframe_importance: float = 0.33
    impact_importance: float = 0.34

class SimulationRequest(BaseModel):
    scenario_name: str
    scenario_description: Optional[str] = None
    business_profile: BusinessProfile
    emission_sources: List[EmissionSource]
    priorities: Optional[Priorities] = None
    budget: Optional[float] = None
    selected_technologies: Optional[List[str]] = None

class Technology(BaseModel):
    id: str
    name: str
    category: str
    description: str
    reduction_factor: float
    implementation_time: str
    cost: str
    lifetime: str
    maintenance_cost: Optional[str] = None
    applicability: List[str]
    case_studies: List[Dict[str, str]] = []

# Mock data for demonstration
TECHNOLOGY_DATA = [
    {
        "id": "tech-1",
        "name": "Solar PV Installation",
        "category": "Renewable Energy",
        "description": "Rooftop solar photovoltaic system with battery storage integration for clean energy generation.",
        "reduction_factor": 35,
        "implementation_time": "12-18 months",
        "cost": "$1,500 per kW",
        "lifetime": "25 years",
        "maintenance_cost": "$30 per kW annually",
        "applicability": ["Manufacturing", "Commercial Buildings", "Data Centers"],
        "case_studies": [
            {
                "company": "Tech Manufacturing Inc.",
                "description": "Implemented 500kW rooftop solar system",
                "result": "Reduced energy-related emissions by 450 tCO₂e/year with 17% ROI"
            }
        ]
    },
    {
        "id": "tech-2",
        "name": "Smart HVAC Control System",
        "category": "Energy Efficiency",
        "description": "AI-powered heating, ventilation, and air conditioning optimization system.",
        "reduction_factor": 22,
        "implementation_time": "6-9 months",
        "cost": "$45 per square meter",
        "lifetime": "10 years",
        "maintenance_cost": "$2.25 per square meter annually",
        "applicability": ["Commercial Buildings", "Hotels", "Hospitals", "Education"],
        "case_studies": [
            {
                "company": "Grand Hotel Chain",
                "description": "Deployed smart HVAC across 15 properties",
                "result": "Reduced HVAC-related emissions by 320 tCO₂e/year with 28% ROI"
            }
        ]
    },
    {
        "id": "tech-3",
        "name": "Electric Vehicle Fleet",
        "category": "Transportation",
        "description": "Replacement of fossil fuel vehicles with electric alternatives and charging infrastructure.",
        "reduction_factor": 65,
        "implementation_time": "18-24 months",
        "cost": "$25,000 per vehicle plus infrastructure",
        "lifetime": "8 years",
        "maintenance_cost": "$1,000 per vehicle annually",
        "applicability": ["Transportation", "Delivery Services", "Field Services"],
        "case_studies": [
            {
                "company": "Delivery Express Corp",
                "description": "Converted 50% of delivery fleet to EVs",
                "result": "Reduced transport emissions by 850 tCO₂e/year with 15% ROI"
            }
        ]
    },
    {
        "id": "tech-4",
        "name": "Industrial Process Electrification",
        "category": "Industrial",
        "description": "Converting fossil fuel-based industrial processes to electric alternatives.",
        "reduction_factor": 48,
        "implementation_time": "24-36 months",
        "cost": "$180,000 per process line",
        "lifetime": "15 years",
        "maintenance_cost": "$5,400 per process line annually",
        "applicability": ["Manufacturing", "Chemical Industry", "Food Processing"],
        "case_studies": [
            {
                "company": "Chemical Solutions Ltd",
                "description": "Electrified heating processes in chemical production",
                "result": "Reduced process emissions by 1,200 tCO₂e/year with 22% ROI"
            }
        ]
    },
    {
        "id": "tech-5",
        "name": "Renewable Energy Power Purchase Agreement",
        "category": "Renewable Energy",
        "description": "Long-term contract to purchase renewable electricity from a specific project.",
        "reduction_factor": 100,
        "implementation_time": "9-12 months",
        "cost": "$5 premium per MWh",
        "lifetime": "10-15 years",
        "applicability": ["All Industries"],
        "case_studies": [
            {
                "company": "Global Tech Services",
                "description": "Signed 10-year PPA for wind energy",
                "result": "Eliminated 5,000 tCO₂e/year of electricity-related emissions"
            }
        ]
    }
]

# Technology categories
TECHNOLOGY_CATEGORIES = [
    "Renewable Energy",
    "Energy Efficiency",
    "Transportation",
    "Industrial",
    "Waste Management",
    "Carbon Capture"
]

# API endpoints
@router.get("/technologies")
async def get_technologies(
    category: Optional[str] = None,
    applicability: Optional[str] = None
):
    """Get available carbon reduction technologies"""
    technologies = TECHNOLOGY_DATA.copy()
    
    # Filter by category if provided
    if category:
        technologies = [tech for tech in technologies if tech["category"] == category]
    
    # Filter by applicability if provided
    if applicability:
        technologies = [
            tech for tech in technologies
            if applicability in tech["applicability"] or "All Industries" in tech["applicability"]
        ]
    
    return technologies

@router.get("/categories")
async def get_technology_categories():
    """Get available technology categories"""
    return TECHNOLOGY_CATEGORIES

@router.post("/recommend")
async def get_technology_recommendations(request: SimulationRequest):
    """Generate technology recommendations based on business profile and emissions"""
    
    # In a real implementation, this would use ML models to generate recommendations
    # Here we use a simplified rule-based approach for demonstration

    # Calculate total emissions
    total_emissions = sum(source.amount for source in request.emission_sources)
    
    # Define priorities
    priorities = request.priorities or Priorities()
    
    # Select technologies that match the industry
    industry = request.business_profile.industry
    all_technologies = TECHNOLOGY_DATA.copy()
    
    # Filter technologies based on industry applicability
    applicable_technologies = []
    for tech in all_technologies:
        if (industry in tech["applicability"] or 
            "All Industries" in tech["applicability"]):
            applicable_technologies.append(tech)
    
    # If user specified technologies, prioritize those
    if request.selected_technologies:
        selected_ids = set(request.selected_technologies)
        selected_technologies = [
            tech for tech in applicable_technologies 
            if tech["id"] in selected_ids
        ]
        other_technologies = [
            tech for tech in applicable_technologies 
            if tech["id"] not in selected_ids
        ]
        recommended_technologies = selected_technologies + other_technologies[:3-len(selected_technologies)]
    else:
        # Score technologies based on priorities
        scored_technologies = []
        for tech in applicable_technologies:
            # Simple scoring model based on weighted factors
            cost_score = 1.0 - (float(tech["cost"].split()[0].replace("$", "").replace(",", "")) / 10000)  # Normalize
            cost_score = max(0, min(1, cost_score))  # Clamp between 0 and 1
            
            time_score = 1.0 - (int(tech["implementation_time"].split("-")[0]) / 36)  # Normalize (max 36 months)
            time_score = max(0, min(1, time_score))  # Clamp between 0 and 1
            
            impact_score = tech["reduction_factor"] / 100  # Already normalized 0-100%
            
            # Weighted score based on priorities
            final_score = (
                cost_score * priorities.cost_importance +
                time_score * priorities.timeframe_importance +
                impact_score * priorities.impact_importance
            )
            
            scored_technologies.append((tech, final_score))
        
        # Sort by score and take top 3
        scored_technologies.sort(key=lambda x: x[1], reverse=True)
        recommended_technologies = [tech for tech, _ in scored_technologies[:3]]
    
    # Calculate total reduction potential for recommended technologies
    total_reduction_percentage = 0
    for tech in recommended_technologies:
        # Consider overlap (diminishing returns) for multiple technologies in same category
        category_techs = [t for t in recommended_technologies if t["category"] == tech["category"]]
        if len(category_techs) > 1:
            # Adjust for diminishing returns when technologies overlap
            reduction = tech["reduction_factor"] * 0.8  # 20% reduction due to overlap
        else:
            reduction = tech["reduction_factor"]
        
        total_reduction_percentage += reduction / len(recommended_technologies)
    
    # Clamp maximum reduction to 90% (realistic limit)
    total_reduction_percentage = min(90, total_reduction_percentage)
    
    # Calculate reduction amount
    total_reduction_amount = total_emissions * (total_reduction_percentage / 100)
    
    # Calculate source-specific reductions based on applicable technologies
    source_reductions = []
    for source in request.emission_sources:
        # Simplified: assign reduction evenly across sources
        reduction_percentage = total_reduction_percentage
        source_reductions.append({
            "source": source.source,
            "reduction_percentage": reduction_percentage
        })
    
    # Estimate implementation costs
    total_implementation_cost = sum(
        float(tech["cost"].split()[0].replace("$", "").replace(",", "")) * 1000  # Simplified cost calculation
        for tech in recommended_technologies
    )
    
    # Budget analysis
    budget_utilization_percentage = 100.0
    if request.budget and request.budget > 0:
        budget_utilization_percentage = (total_implementation_cost / request.budget) * 100
    
    # Cost per ton reduced
    cost_per_ton_reduced = total_implementation_cost / total_reduction_amount if total_reduction_amount > 0 else 0
    
    # Generate yearly emission projections for visualization (simplified)
    yearly_emissions = []
    baseline = total_emissions
    for year in range(5):  # 5-year projection
        if year == 0:
            yearly_emissions.append({
                "year": 2023 + year,
                "emissions": baseline,
                "type": "Baseline"
            })
        else:
            # Progressive reduction over time
            reduction_factor = min(1.0, year / 3)  # Full effect after 3 years
            reduced = baseline * (1 - (total_reduction_percentage / 100) * reduction_factor)
            yearly_emissions.append({
                "year": 2023 + year,
                "emissions": reduced,
                "type": "Projected"
            })
    
    # Return simulation results
    return {
        "scenario_id": "sim-" + os.urandom(4).hex(),
        "scenario_name": request.scenario_name,
        "scenario_description": request.scenario_description,
        "business_profile": request.business_profile,
        "emission_sources": request.emission_sources,
        "total_baseline_emissions": total_emissions,
        "total_projected_emissions": total_emissions * (1 - total_reduction_percentage / 100),
        "total_reduction_percentage": total_reduction_percentage,
        "total_reduction_amount": total_reduction_amount,
        "source_reductions": source_reductions,
        "recommended_technologies": recommended_technologies,
        "total_implementation_cost": total_implementation_cost,
        "budget": request.budget,
        "budget_utilization_percentage": budget_utilization_percentage,
        "cost_per_ton_reduced": cost_per_ton_reduced,
        "yearly_emissions": yearly_emissions,
        "summary": f"This simulation identifies a potential {total_reduction_percentage:.1f}% reduction in carbon emissions through the implementation of recommended technologies, at an estimated cost of ${total_implementation_cost:,.2f}."
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(router, host="0.0.0.0", port=8000) 