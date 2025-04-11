from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
import json
import os
from datetime import datetime

router = APIRouter(
    prefix="/api/simulation",
    tags=["simulation"],
    responses={404: {"description": "Not found"}},
)

# Models
class EmissionSource(BaseModel):
    source_type: str
    quantity: float
    unit: str
    emission_factor: Optional[float] = None

class SimulationRequest(BaseModel):
    business_type: str
    emission_sources: List[EmissionSource]
    timeline_years: int = 5
    budget_constraint: Optional[float] = None
    priority_areas: List[str] = []

class Technology(BaseModel):
    id: str
    name: str
    category: str
    description: str
    reduction_factor: float
    implementation_time: int
    cost: Dict[str, float]
    lifetime: int
    maintenance_cost: float
    applicability: List[str]
    case_studies: List[Dict[str, str]]

class TechnologyResponse(BaseModel):
    technologies: List[Technology]

class SimulationResult(BaseModel):
    recommended_technologies: List[Technology]
    emission_reduction: Dict[str, float]
    implementation_timeline: Dict[str, List[str]]
    cost_analysis: Dict[str, float]
    roi_analysis: Dict[str, float]

# Mock data - in production this would come from a database
def load_technology_data():
    # Check if the file exists
    file_path = os.path.join(os.path.dirname(__file__), "technologies.json")
    if os.path.exists(file_path):
        with open(file_path, 'r') as f:
            return json.load(f)
    else:
        # Return default data if file doesn't exist
        return [
            {
                "id": "tech-001",
                "name": "Solar Photovoltaic System",
                "category": "Renewable Energy",
                "description": "Solar panels that convert sunlight into electricity, reducing reliance on fossil fuel-based grid electricity.",
                "reduction_factor": 0.40,
                "implementation_time": 6,
                "cost": {"installation": 25000, "per_unit": 1500},
                "lifetime": 25,
                "maintenance_cost": 500,
                "applicability": ["Mining", "Manufacturing", "Commercial", "Residential"],
                "case_studies": [
                    {
                        "title": "Mining Corporation Solar Transition",
                        "description": "A mining company implemented a 500kW solar system, reducing their carbon emissions by 35% in the first year."
                    }
                ]
            },
            {
                "id": "tech-002",
                "name": "Electric Vehicle Fleet",
                "category": "Transportation",
                "description": "Replacement of traditional combustion engine vehicles with electric alternatives.",
                "reduction_factor": 0.70,
                "implementation_time": 12,
                "cost": {"installation": 5000, "per_unit": 35000},
                "lifetime": 10,
                "maintenance_cost": 1200,
                "applicability": ["Mining", "Logistics", "Commercial"],
                "case_studies": [
                    {
                        "title": "Logistics Company EV Transition",
                        "description": "A logistics company replaced 50% of their delivery vehicles with EVs, reducing transportation emissions by 60%."
                    }
                ]
            },
            {
                "id": "tech-003",
                "name": "Energy-Efficient HVAC System",
                "category": "Energy Efficiency",
                "description": "Modern HVAC systems with high energy efficiency ratings and smart controls.",
                "reduction_factor": 0.30,
                "implementation_time": 3,
                "cost": {"installation": 15000, "per_unit": 0},
                "lifetime": 15,
                "maintenance_cost": 800,
                "applicability": ["Commercial", "Residential", "Manufacturing"],
                "case_studies": [
                    {
                        "title": "Office Complex HVAC Upgrade",
                        "description": "A commercial office building upgraded their HVAC system, reducing energy consumption by 25% and improving comfort."
                    }
                ]
            },
            {
                "id": "tech-004",
                "name": "Methane Capture System",
                "category": "Emissions Capture",
                "description": "System designed to capture methane emissions from mining operations and convert to less harmful compounds or utilize as fuel.",
                "reduction_factor": 0.85,
                "implementation_time": 18,
                "cost": {"installation": 180000, "per_unit": 0},
                "lifetime": 20,
                "maintenance_cost": 12000,
                "applicability": ["Mining", "Waste Management", "Agriculture"],
                "case_studies": [
                    {
                        "title": "Coal Mine Methane Reduction",
                        "description": "A coal mining operation implemented methane capture, reducing their GHG emissions by 75% and generating electricity on-site."
                    }
                ]
            },
            {
                "id": "tech-005",
                "name": "LED Lighting Upgrade",
                "category": "Energy Efficiency",
                "description": "Replacement of traditional lighting with energy-efficient LED solutions.",
                "reduction_factor": 0.15,
                "implementation_time": 1,
                "cost": {"installation": 5000, "per_unit": 25},
                "lifetime": 15,
                "maintenance_cost": 200,
                "applicability": ["Mining", "Manufacturing", "Commercial", "Residential"],
                "case_studies": [
                    {
                        "title": "Manufacturing Plant Lighting Upgrade",
                        "description": "A manufacturing facility replaced all lighting with LEDs, reducing electricity consumption by 18% and improving visibility."
                    }
                ]
            },
            {
                "id": "tech-006",
                "name": "Improved Insulation",
                "category": "Energy Efficiency",
                "description": "Enhanced building insulation to reduce heating and cooling energy requirements.",
                "reduction_factor": 0.25,
                "implementation_time": 2,
                "cost": {"installation": 12000, "per_unit": 15},
                "lifetime": 30,
                "maintenance_cost": 100,
                "applicability": ["Commercial", "Residential", "Manufacturing"],
                "case_studies": [
                    {
                        "title": "Office Building Insulation Project",
                        "description": "An office complex improved insulation, reducing heating and cooling costs by 22% annually."
                    }
                ]
            },
            {
                "id": "tech-007",
                "name": "Variable Frequency Drives",
                "category": "Energy Efficiency",
                "description": "VFDs for motors and pumps to optimize energy usage based on demand.",
                "reduction_factor": 0.20,
                "implementation_time": 3,
                "cost": {"installation": 8000, "per_unit": 1200},
                "lifetime": 15,
                "maintenance_cost": 400,
                "applicability": ["Mining", "Manufacturing", "Water Treatment"],
                "case_studies": [
                    {
                        "title": "Mining Equipment Efficiency Upgrade",
                        "description": "A mining operation installed VFDs on all major motors, reducing energy consumption by 18% and extending equipment life."
                    }
                ]
            },
            {
                "id": "tech-008",
                "name": "Biofuel Transition",
                "category": "Alternative Fuels",
                "description": "Replacement of fossil fuels with sustainably sourced biofuels for equipment and vehicles.",
                "reduction_factor": 0.50,
                "implementation_time": 6,
                "cost": {"installation": 30000, "per_unit": 0.15},
                "lifetime": 10,
                "maintenance_cost": 5000,
                "applicability": ["Mining", "Transportation", "Agriculture"],
                "case_studies": [
                    {
                        "title": "Heavy Equipment Biofuel Conversion",
                        "description": "A mining company transitioned 70% of heavy equipment to biofuel blends, reducing emissions by 45%."
                    }
                ]
            },
            {
                "id": "tech-009",
                "name": "Wind Turbine Installation",
                "category": "Renewable Energy",
                "description": "On-site wind turbines to generate clean electricity for operations.",
                "reduction_factor": 0.35,
                "implementation_time": 18,
                "cost": {"installation": 120000, "per_unit": 80000},
                "lifetime": 20,
                "maintenance_cost": 8000,
                "applicability": ["Mining", "Manufacturing", "Agricultural", "Coastal Facilities"],
                "case_studies": [
                    {
                        "title": "Coastal Mining Wind Power",
                        "description": "A coastal mining operation installed three wind turbines, supplying 40% of their electricity needs from renewable sources."
                    }
                ]
            },
            {
                "id": "tech-010",
                "name": "Battery Energy Storage System",
                "category": "Energy Management",
                "description": "Large-scale battery storage to optimize renewable energy usage and provide backup power.",
                "reduction_factor": 0.20,
                "implementation_time": 12,
                "cost": {"installation": 75000, "per_unit": 800},
                "lifetime": 10,
                "maintenance_cost": 2000,
                "applicability": ["Mining", "Manufacturing", "Commercial", "Utilities"],
                "case_studies": [
                    {
                        "title": "Mining Microgrid Implementation",
                        "description": "A remote mining operation implemented a battery storage system with their solar array, reducing diesel generator usage by 60%."
                    }
                ]
            }
        ]

# Endpoints
@router.get("/technologies", response_model=List[Technology])
async def get_technologies(category: Optional[str] = None, applicability: Optional[str] = None):
    """
    Retrieve available carbon reduction technologies
    Optionally filter by category or applicability
    """
    technologies = load_technology_data()
    
    if category:
        technologies = [tech for tech in technologies if tech["category"] == category]
    
    if applicability:
        technologies = [tech for tech in technologies if applicability in tech["applicability"]]
    
    return technologies

@router.post("/recommend", response_model=SimulationResult)
async def recommend_technologies(request: SimulationRequest):
    """
    Recommend carbon reduction technologies based on business profile and emission sources
    """
    # In a production system, this would use a more sophisticated algorithm
    # to match and recommend technologies
    
    technologies = load_technology_data()
    
    # Simple filtering based on business type
    applicable_techs = [
        tech for tech in technologies 
        if request.business_type in tech["applicability"] or "All" in tech["applicability"]
    ]
    
    # If we have priority areas, boost technologies in those categories
    if request.priority_areas:
        applicable_techs = sorted(
            applicable_techs,
            key=lambda x: (x["category"] in request.priority_areas, x["reduction_factor"]),
            reverse=True
        )
    else:
        # Otherwise sort by reduction factor
        applicable_techs = sorted(
            applicable_techs,
            key=lambda x: x["reduction_factor"],
            reverse=True
        )
    
    # Take top 5 or fewer
    recommended_techs = applicable_techs[:min(5, len(applicable_techs))]
    
    # Calculate potential emission reduction
    total_emissions = sum(source.quantity * (source.emission_factor or 1.0) for source in request.emission_sources)
    
    yearly_reductions = {}
    current_year = datetime.now().year
    
    for year in range(current_year, current_year + request.timeline_years + 1):
        # Simple model: technologies are implemented linearly over time
        implemented_tech_count = min(len(recommended_techs), year - current_year)
        implemented_techs = recommended_techs[:implemented_tech_count]
        
        if not implemented_techs:
            reduction = 0
        else:
            # Calculate combined reduction factor (simplified)
            combined_factor = sum(tech["reduction_factor"] for tech in implemented_techs) / len(implemented_techs)
            reduction = total_emissions * combined_factor
            
        yearly_reductions[str(year)] = round(reduction, 2)
    
    # Create implementation timeline
    timeline = {}
    for i, tech in enumerate(recommended_techs):
        year = current_year + min(i, request.timeline_years)
        if str(year) not in timeline:
            timeline[str(year)] = []
        timeline[str(year)].append(tech["name"])
    
    # Calculate costs
    initial_investment = sum(tech["cost"]["installation"] for tech in recommended_techs)
    annual_maintenance = sum(tech["maintenance_cost"] for tech in recommended_techs)
    
    # Calculate ROI (very simplified)
    # Assuming carbon credit value of $25 per ton
    carbon_credit_value = 25
    
    roi = {}
    cumulative_reduction = 0
    for year in range(current_year, current_year + request.timeline_years + 1):
        year_str = str(year)
        if year_str in yearly_reductions:
            cumulative_reduction += yearly_reductions[year_str]
            financial_benefit = cumulative_reduction * carbon_credit_value
            if year == current_year:
                # First year has initial investment
                roi[year_str] = -initial_investment
            else:
                # Subsequent years have maintenance costs and benefits
                previous_roi = roi[str(year-1)]
                roi[year_str] = previous_roi - annual_maintenance + financial_benefit
    
    return {
        "recommended_technologies": recommended_techs,
        "emission_reduction": yearly_reductions,
        "implementation_timeline": timeline,
        "cost_analysis": {
            "initial_investment": initial_investment,
            "annual_maintenance": annual_maintenance,
            "5_year_total": initial_investment + (annual_maintenance * request.timeline_years)
        },
        "roi_analysis": roi
    }

@router.get("/categories")
async def get_categories():
    """
    Get list of all technology categories
    """
    technologies = load_technology_data()
    categories = list(set(tech["category"] for tech in technologies))
    return {"categories": categories} 