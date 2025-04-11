from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel
from typing import List, Dict, Optional, Any
import json
import os
import random
from datetime import datetime

# Import the AI-driven simulation router
from simulation.simulation_api import router as ai_simulation_router

router = APIRouter(
    prefix="/simulation",
    tags=["simulation"],
    responses={404: {"description": "Not found"}},
)

# Models
class Technology(BaseModel):
    id: str
    name: str
    category: str
    description: str
    reduction_factor: float
    implementation_time: int
    cost: float
    lifetime: int
    maintenance_cost: float
    applicability: List[str]
    case_studies: List[Dict[str, str]]

class SimulationInput(BaseModel):
    baseline_emissions: float
    target_reduction: float
    budget_constraint: Optional[float] = None
    time_horizon: int
    industry_type: str
    selected_technologies: List[str] = []

class SimulationResult(BaseModel):
    scenario_id: str
    name: str
    created_at: str
    baseline_emissions: float
    target_reduction: float
    achieved_reduction: float
    total_cost: float
    roi: float
    implementation_timeline: Dict[str, Any]
    technologies: List[Technology]
    emission_trajectory: List[Dict[str, Any]]

# Load technologies data
TECHNOLOGIES = [
    {
        "id": "tech-001",
        "name": "Solar PV Installation",
        "category": "Renewable Energy",
        "description": "Installation of photovoltaic panels to generate clean electricity",
        "reduction_factor": 0.35,
        "implementation_time": 8,
        "cost": 75000,
        "lifetime": 25,
        "maintenance_cost": 2000,
        "applicability": ["Manufacturing", "Commercial Buildings", "Mining", "Agriculture"],
        "case_studies": [
            {
                "title": "Manufacturing Plant Solar Transition",
                "location": "Gujarat, India",
                "reduction_achieved": "42% energy-related emissions"
            },
            {
                "title": "Mining Operation Renewable Integration",
                "location": "Rajasthan, India",
                "reduction_achieved": "28% total emissions"
            }
        ]
    },
    {
        "id": "tech-002",
        "name": "Energy Efficient HVAC Systems",
        "category": "Energy Efficiency",
        "description": "Upgrading to high-efficiency heating, ventilation, and air conditioning systems",
        "reduction_factor": 0.22,
        "implementation_time": 5,
        "cost": 35000,
        "lifetime": 15,
        "maintenance_cost": 1200,
        "applicability": ["Commercial Buildings", "Manufacturing", "Hospitality", "Healthcare"],
        "case_studies": [
            {
                "title": "Office Complex HVAC Modernization",
                "location": "Bengaluru, India",
                "reduction_achieved": "24% energy consumption"
            }
        ]
    },
    {
        "id": "tech-003",
        "name": "Methane Capture System",
        "category": "Process Emissions",
        "description": "Implementation of methane capture technology for coal mining operations",
        "reduction_factor": 0.65,
        "implementation_time": 12,
        "cost": 250000,
        "lifetime": 20,
        "maintenance_cost": 15000,
        "applicability": ["Mining", "Oil & Gas", "Waste Management"],
        "case_studies": [
            {
                "title": "Coal Mine Methane Reduction Project",
                "location": "Jharkhand, India",
                "reduction_achieved": "72% methane emissions reduction"
            },
            {
                "title": "Integrated Methane Capture and Utilization",
                "location": "Chhattisgarh, India",
                "reduction_achieved": "68% methane reduction with energy recovery"
            }
        ]
    },
    {
        "id": "tech-004",
        "name": "Electric Vehicle Fleet Transition",
        "category": "Transportation",
        "description": "Replacing fossil fuel vehicles with electric alternatives",
        "reduction_factor": 0.28,
        "implementation_time": 18,
        "cost": 180000,
        "lifetime": 12,
        "maintenance_cost": 8000,
        "applicability": ["Transportation", "Mining", "Manufacturing", "Logistics"],
        "case_studies": [
            {
                "title": "Mining Equipment Electrification",
                "location": "Odisha, India",
                "reduction_achieved": "31% transport emissions"
            }
        ]
    },
    {
        "id": "tech-005",
        "name": "Process Optimization AI",
        "category": "Smart Systems",
        "description": "AI-driven optimization of industrial processes to reduce energy consumption and emissions",
        "reduction_factor": 0.18,
        "implementation_time": 6,
        "cost": 85000,
        "lifetime": 8,
        "maintenance_cost": 12000,
        "applicability": ["Manufacturing", "Mining", "Chemical Processing", "Oil & Gas"],
        "case_studies": [
            {
                "title": "Smart Mining Operations Transformation",
                "location": "Madhya Pradesh, India",
                "reduction_achieved": "21% overall emissions"
            }
        ]
    },
    {
        "id": "tech-006",
        "name": "Industrial Waste Heat Recovery",
        "category": "Energy Efficiency",
        "description": "Systems that capture and reuse waste heat from industrial processes",
        "reduction_factor": 0.25,
        "implementation_time": 10,
        "cost": 120000,
        "lifetime": 20,
        "maintenance_cost": 5000,
        "applicability": ["Manufacturing", "Mining", "Chemical Processing", "Paper & Pulp"],
        "case_studies": [
            {
                "title": "Steel Plant Heat Recovery Integration",
                "location": "Maharashtra, India",
                "reduction_achieved": "29% energy-related emissions"
            }
        ]
    },
    {
        "id": "tech-007",
        "name": "Biodiversity Offset Programs",
        "category": "Carbon Sinks",
        "description": "Implementation of biodiversity conservation and reforestation to offset emissions",
        "reduction_factor": 0.15,
        "implementation_time": 24,
        "cost": 50000,
        "lifetime": 30,
        "maintenance_cost": 3000,
        "applicability": ["Mining", "Construction", "Agriculture", "Forestry"],
        "case_studies": [
            {
                "title": "Mining Reclamation and Reforestation",
                "location": "West Bengal, India",
                "reduction_achieved": "18% carbon offsetting"
            }
        ]
    },
    {
        "id": "tech-008",
        "name": "Green Hydrogen Production",
        "category": "Renewable Energy",
        "description": "Electrolysis systems powered by renewable energy to produce clean hydrogen",
        "reduction_factor": 0.40,
        "implementation_time": 36,
        "cost": 500000,
        "lifetime": 25,
        "maintenance_cost": 25000,
        "applicability": ["Chemical Processing", "Manufacturing", "Mining", "Transportation"],
        "case_studies": [
            {
                "title": "Integrated Hydrogen Energy System",
                "location": "Karnataka, India",
                "reduction_achieved": "45% reduction in process emissions"
            }
        ]
    },
    {
        "id": "tech-009",
        "name": "Water Conservation Systems",
        "category": "Resource Efficiency",
        "description": "Advanced water management technologies that reduce energy used in water processing",
        "reduction_factor": 0.12,
        "implementation_time": 7,
        "cost": 65000,
        "lifetime": 15,
        "maintenance_cost": 4000,
        "applicability": ["Mining", "Agriculture", "Manufacturing", "Hospitality"],
        "case_studies": [
            {
                "title": "Mining Operation Water Recycling",
                "location": "Rajasthan, India",
                "reduction_achieved": "14% energy reduction from water management"
            }
        ]
    },
    {
        "id": "tech-010",
        "name": "Carbon Capture Retrofits",
        "category": "Carbon Capture",
        "description": "Post-combustion carbon capture technology for existing facilities",
        "reduction_factor": 0.70,
        "implementation_time": 30,
        "cost": 750000,
        "lifetime": 20,
        "maintenance_cost": 45000,
        "applicability": ["Power Generation", "Manufacturing", "Chemical Processing"],
        "case_studies": [
            {
                "title": "Thermal Power Plant CCS Integration",
                "location": "Uttar Pradesh, India",
                "reduction_achieved": "75% stack emissions reduction"
            }
        ]
    }
]

@router.get("/technologies", response_model=List[Technology])
async def get_technologies(
    category: Optional[str] = None,
    search: Optional[str] = None,
    applicability: Optional[str] = None
):
    """Get all available carbon reduction technologies with optional filtering"""
    result = TECHNOLOGIES
    
    if category:
        result = [tech for tech in result if tech["category"] == category]
    
    if search:
        search = search.lower()
        result = [tech for tech in result if search in tech["name"].lower() or search in tech["description"].lower()]
    
    if applicability:
        result = [tech for tech in result if applicability in tech["applicability"]]
    
    return result

@router.get("/technology/{technology_id}", response_model=Technology)
async def get_technology(technology_id: str):
    """Get details for a specific technology"""
    for tech in TECHNOLOGIES:
        if tech["id"] == technology_id:
            return tech
    raise HTTPException(status_code=404, detail="Technology not found")

@router.get("/categories")
async def get_categories():
    """Get all unique technology categories"""
    categories = set()
    for tech in TECHNOLOGIES:
        categories.add(tech["category"])
    return {"categories": list(categories)}

@router.post("/simulate", response_model=SimulationResult)
async def simulate_scenario(simulation_input: SimulationInput):
    """
    Run a carbon reduction simulation based on provided parameters
    """
    # Get relevant technologies (either selected or all applicable ones)
    applicable_technologies = []
    
    if simulation_input.selected_technologies:
        for tech_id in simulation_input.selected_technologies:
            tech = next((t for t in TECHNOLOGIES if t["id"] == tech_id), None)
            if tech:
                applicable_technologies.append(tech)
    else:
        # If no technologies specifically selected, find applicable ones for the industry
        applicable_technologies = [
            tech for tech in TECHNOLOGIES 
            if simulation_input.industry_type in tech["applicability"]
        ]
    
    # Sort technologies by effectiveness (reduction factor / cost)
    applicable_technologies.sort(
        key=lambda t: t["reduction_factor"] / t["cost"], 
        reverse=True
    )
    
    # Create implementation plan
    selected_techs = []
    remaining_budget = simulation_input.budget_constraint if simulation_input.budget_constraint else float('inf')
    current_reduction = 0
    target_reduction = simulation_input.baseline_emissions * (simulation_input.target_reduction / 100)
    total_cost = 0
    
    # Select technologies within constraints
    for tech in applicable_technologies:
        # Skip if we've already reached target or if the tech exceeds the budget
        if current_reduction >= target_reduction or tech["cost"] > remaining_budget:
            continue
            
        # Calculate the actual emission reduction for this technology
        tech_reduction = simulation_input.baseline_emissions * tech["reduction_factor"]
        
        # Adjust for diminishing returns if we've already selected technologies
        if selected_techs:
            tech_reduction = tech_reduction * (1 - (current_reduction / simulation_input.baseline_emissions))
        
        # Add this technology to our plan
        selected_techs.append(tech)
        current_reduction += tech_reduction
        total_cost += tech["cost"]
        remaining_budget -= tech["cost"]
    
    # Calculate implementation timeline
    timeline = {}
    current_month = 0
    
    for tech in selected_techs:
        start_month = current_month
        end_month = current_month + tech["implementation_time"]
        timeline[tech["id"]] = {
            "name": tech["name"],
            "start_month": start_month,
            "end_month": end_month
        }
        current_month = max(current_month + 2, end_month - 4)  # Allow some parallel implementation
    
    # Calculate emission trajectory over time
    emission_trajectory = []
    monthly_emissions = simulation_input.baseline_emissions / 12  # Monthly emissions
    
    for month in range(simulation_input.time_horizon):
        month_reduction = 0
        active_techs = []
        
        # Check which technologies are active this month
        for tech in selected_techs:
            tech_id = tech["id"]
            if month >= timeline[tech_id]["end_month"]:
                month_reduction += simulation_input.baseline_emissions * tech["reduction_factor"] / 12
                active_techs.append(tech["name"])
        
        # Calculate this month's emissions
        month_emissions = monthly_emissions - month_reduction
        if month_emissions < 0:
            month_emissions = 0
            
        emission_trajectory.append({
            "month": month,
            "emissions": month_emissions,
            "active_technologies": active_techs
        })
    
    # Calculate ROI (simple version - reduction value / cost)
    # Assuming carbon price of $40 per ton
    carbon_price = 40
    achieved_reduction_tons = current_reduction  # in tons of CO2e
    reduction_value = achieved_reduction_tons * carbon_price * (simulation_input.time_horizon / 12)  # value over time horizon
    
    if total_cost > 0:
        roi = (reduction_value - total_cost) / total_cost
    else:
        roi = 0
    
    # Create the response
    result = {
        "scenario_id": f"scenario-{random.randint(1000, 9999)}",
        "name": f"Scenario {datetime.now().strftime('%Y-%m-%d %H:%M')}",
        "created_at": datetime.now().isoformat(),
        "baseline_emissions": simulation_input.baseline_emissions,
        "target_reduction": simulation_input.target_reduction,
        "achieved_reduction": (current_reduction / simulation_input.baseline_emissions) * 100,
        "total_cost": total_cost,
        "roi": roi,
        "implementation_timeline": timeline,
        "technologies": selected_techs,
        "emission_trajectory": emission_trajectory
    }
    
    return result

@router.get("/recommend", response_model=List[Technology])
async def recommend_technologies(
    industry_type: str,
    budget: Optional[float] = None,
    target_reduction: Optional[float] = None,
    time_horizon: Optional[int] = None
):
    """Recommend technologies based on industry and constraints"""
    
    # Filter by industry applicability
    applicable_techs = [
        tech for tech in TECHNOLOGIES 
        if industry_type in tech["applicability"]
    ]
    
    # Apply additional filters if provided
    if budget:
        applicable_techs = [tech for tech in applicable_techs if tech["cost"] <= budget]
    
    if time_horizon:
        applicable_techs = [tech for tech in applicable_techs if tech["implementation_time"] <= time_horizon]
    
    # Sort by effectiveness (reduction factor)
    applicable_techs.sort(key=lambda t: t["reduction_factor"], reverse=True)
    
    # Return top 5 recommendations
    return applicable_techs[:5]

# Include the AI simulation router for advanced features
# This will add the routes from simulation_api.py with the prefix /simulation
router.include_router(ai_simulation_router) 