from fastapi import APIRouter, HTTPException, Depends, Query, status
from typing import List, Optional
from pydantic import BaseModel
import json
from datetime import datetime

router = APIRouter(
    prefix="/api/marketplace",
    tags=["marketplace"],
    responses={404: {"description": "Not found"}},
)

# --- Pydantic Models ---

class CreditBase(BaseModel):
    title: str
    provider: str
    location: str
    price: float
    amount: int
    unit: str
    vintage: str
    verification: str
    industry: str
    description: str
    imageUrl: str

class Credit(CreditBase):
    id: int

class ProjectBase(BaseModel):
    title: str
    organization: str
    location: str
    pricePerUnit: float
    availableUnits: int
    unit: str
    category: str
    verification: str
    impact: str
    timeline: str
    progress: int
    description: str
    imageUrl: str

class Project(ProjectBase):
    id: int

class CartItem(BaseModel):
    type: str  # 'credit' or 'project'
    id: int
    quantity: int
    title: str
    price: float
    subtotal: float

class Cart(BaseModel):
    items: List[CartItem]
    total: float

class OrderCertificate(BaseModel):
    id: str
    title: str
    url: str

class OrderConfirmation(BaseModel):
    success: bool
    orderId: str
    total: float
    message: str
    certificates: List[OrderCertificate]

class AddToCartRequest(BaseModel):
    id: int
    quantity: int

class CheckoutRequest(BaseModel):
    paymentMethod: str
    billingDetails: dict
    
# --- Mock Data Functions ---

def get_mock_credits():
    # In production, this would fetch from a database
    return [
        {
            "id": 1,
            "title": "Renewable Energy Credits",
            "provider": "GreenPower Co.",
            "location": "California, USA",
            "price": 24.50,
            "amount": 500,
            "unit": "tCO₂e",
            "vintage": "2023",
            "verification": "Gold Standard",
            "industry": "Energy",
            "description": "Carbon credits generated from solar farm operations in California.",
            "imageUrl": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            "id": 2,
            "title": "Reforestation Credits",
            "provider": "ForestGuard",
            "location": "Amazon Basin, Brazil",
            "price": 18.75,
            "amount": 1200,
            "unit": "tCO₂e",
            "vintage": "2022",
            "verification": "Verified Carbon Standard",
            "industry": "Forestry",
            "description": "Credits from large-scale reforestation project in the Amazon rainforest.",
            "imageUrl": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            "id": 3,
            "title": "Methane Capture Credits",
            "provider": "CleanAir Systems",
            "location": "Gujarat, India",
            "price": 15.25,
            "amount": 750,
            "unit": "tCO₂e",
            "vintage": "2023",
            "verification": "Climate Action Reserve",
            "industry": "Waste Management",
            "description": "Credits generated from landfill methane capture and conversion to energy.",
            "imageUrl": "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ]

def get_mock_projects():
    # In production, this would fetch from a database
    return [
        {
            "id": 1,
            "title": "Mangrove Restoration Project",
            "organization": "Ocean Guardians",
            "location": "Sundarbans, Bangladesh",
            "pricePerUnit": 22.50,
            "availableUnits": 2500,
            "unit": "tCO₂e",
            "category": "Blue Carbon",
            "verification": "Verra",
            "impact": "30,000 hectares restored",
            "timeline": "2023-2028",
            "progress": 35,
            "description": "This project focuses on restoring critical mangrove ecosystems in the Sundarbans delta, which serve as important carbon sinks and protect coastal communities.",
            "imageUrl": "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            "id": 2,
            "title": "Wind Farm Development",
            "organization": "CleanAir Energy",
            "location": "Tamil Nadu, India",
            "pricePerUnit": 19.25,
            "availableUnits": 4800,
            "unit": "tCO₂e",
            "category": "Renewable Energy",
            "verification": "Gold Standard",
            "impact": "250 MW capacity added",
            "timeline": "2023-2025",
            "progress": 65,
            "description": "Construction of utility-scale wind farms in the windy coastal regions of Tamil Nadu, replacing fossil fuel electricity generation.",
            "imageUrl": "https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ]

def get_mock_cart():
    return {
        "items": [
            {
                "type": "credit",
                "id": 1,
                "quantity": 2,
                "title": "Renewable Energy Credits",
                "price": 24.50,
                "subtotal": 49.00
            },
            {
                "type": "project",
                "id": 1,
                "quantity": 10,
                "title": "Mangrove Restoration Project",
                "price": 22.50,
                "subtotal": 225.00
            }
        ],
        "total": 274.00
    }

# --- API Endpoints ---

@router.get("/", response_model=dict)
async def get_marketplace_data(
    industry: Optional[str] = None,
    location: Optional[str] = None,
    min_price: Optional[float] = None,
    max_price: Optional[float] = None,
    verification: Optional[str] = None,
    vintage: Optional[str] = None
):
    """
    Get all marketplace data including carbon credits and offset projects
    """
    credits = get_mock_credits()
    projects = get_mock_projects()
    
    # In a real implementation, filtering would be done at the database level
    # This is a simple example of filter implementation
    if industry:
        credits = [c for c in credits if c["industry"].lower() == industry.lower()]
    
    if min_price is not None:
        credits = [c for c in credits if c["price"] >= min_price]
        projects = [p for p in projects if p["pricePerUnit"] >= min_price]
    
    if max_price is not None:
        credits = [c for c in credits if c["price"] <= max_price]
        projects = [p for p in projects if p["pricePerUnit"] <= max_price]
    
    if verification:
        credits = [c for c in credits if c["verification"].lower() == verification.lower()]
        projects = [p for p in projects if p["verification"].lower() == verification.lower()]
    
    if vintage:
        credits = [c for c in credits if c["vintage"] == vintage]
    
    if location:
        credits = [c for c in credits if location.lower() in c["location"].lower()]
        projects = [p for p in projects if location.lower() in p["location"].lower()]
    
    return {
        "credits": credits,
        "projects": projects
    }

@router.get("/credits/{credit_id}", response_model=Credit)
async def get_credit(credit_id: int):
    """
    Get details of a specific carbon credit
    """
    credits = get_mock_credits()
    for credit in credits:
        if credit["id"] == credit_id:
            return credit
    
    raise HTTPException(status_code=404, detail="Credit not found")

@router.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: int):
    """
    Get details of a specific offset project
    """
    projects = get_mock_projects()
    for project in projects:
        if project["id"] == project_id:
            return project
    
    raise HTTPException(status_code=404, detail="Project not found")

@router.get("/cart", response_model=Cart)
async def get_user_cart():
    """
    Get the user's shopping cart
    """
    return get_mock_cart()

@router.post("/cart/credits", status_code=status.HTTP_200_OK)
async def add_credit_to_cart(request: AddToCartRequest):
    """
    Add a carbon credit to the shopping cart
    """
    # Verify that the credit exists and has sufficient quantity
    credits = get_mock_credits()
    credit = None
    for c in credits:
        if c["id"] == request.id:
            credit = c
            break
    
    if not credit:
        raise HTTPException(status_code=404, detail="Credit not found")
    
    if request.quantity <= 0:
        raise HTTPException(status_code=400, detail="Quantity must be greater than zero")
    
    if request.quantity > credit["amount"]:
        raise HTTPException(status_code=400, detail="Requested quantity exceeds available amount")
    
    # In production, this would add to or update the user's cart in a database
    return {
        "success": True,
        "message": "Credit added to cart",
        "creditId": request.id,
        "quantity": request.quantity
    }

@router.post("/cart/projects", status_code=status.HTTP_200_OK)
async def add_project_to_cart(request: AddToCartRequest):
    """
    Add an offset project investment to the shopping cart
    """
    # Verify that the project exists and has sufficient quantity
    projects = get_mock_projects()
    project = None
    for p in projects:
        if p["id"] == request.id:
            project = p
            break
    
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    if request.quantity <= 0:
        raise HTTPException(status_code=400, detail="Quantity must be greater than zero")
    
    if request.quantity > project["availableUnits"]:
        raise HTTPException(status_code=400, detail="Requested quantity exceeds available units")
    
    # In production, this would add to or update the user's cart in a database
    return {
        "success": True,
        "message": "Project added to cart",
        "projectId": request.id,
        "quantity": request.quantity
    }

@router.delete("/cart/items/{item_id}", status_code=status.HTTP_200_OK)
async def remove_item_from_cart(item_id: int, item_type: str = Query(..., description="Type of item: 'credit' or 'project'")):
    """
    Remove an item from the shopping cart
    """
    if item_type not in ["credit", "project"]:
        raise HTTPException(status_code=400, detail="Invalid item type. Must be 'credit' or 'project'")
    
    # In production, this would remove the item from the user's cart in a database
    return {
        "success": True,
        "message": f"{item_type.capitalize()} removed from cart",
        "itemId": item_id,
        "itemType": item_type
    }

@router.post("/checkout", response_model=OrderConfirmation)
async def process_checkout(request: CheckoutRequest):
    """
    Process checkout and complete the purchase
    """
    # In production, this would process payment and create certificates
    cart = get_mock_cart()
    
    # Generate a random order ID
    from random import randint
    order_id = f"ORD-{randint(100000, 999999)}"
    
    # Create certificates for each purchased item
    certificates = []
    for item in cart["items"]:
        cert_id = f"CERT-{randint(100000, 999999)}"
        if item["type"] == "credit":
            title = f"{item['title']} Certificate"
        else:
            title = f"{item['title']} Investment Certificate"
        
        certificates.append({
            "id": cert_id,
            "title": title,
            "url": f"/certificates/{cert_id}"
        })
    
    return {
        "success": True,
        "orderId": order_id,
        "total": cart["total"],
        "message": "Your order has been placed successfully",
        "certificates": certificates
    } 