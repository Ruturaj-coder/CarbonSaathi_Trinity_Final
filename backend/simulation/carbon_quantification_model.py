import numpy as np
import pandas as pd
from sklearn.multioutput import MultiOutputRegressor
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler
from typing import Dict, List, Optional
import joblib
import os
from pydantic import BaseModel

# Define models for API
class DepartmentInput(BaseModel):
    name: str
    energy_usage: float  # MWh
    fuel_consumption: float  # L
    industrial_output: float  # tons
    waste_generated: float  # tons
    transport_distance: float  # km

class QuantificationRequest(BaseModel):
    departments: List[DepartmentInput]

class ActivityEmission(BaseModel):
    activity: str
    emission: float
    percentage: float

class DepartmentEmission(BaseModel):
    department: str
    emission: float
    percentage: float

class QuantificationResponse(BaseModel):
    total_emissions: float  # kg CO2
    carbon_credits_required: float
    department_emissions: List[DepartmentEmission]
    activity_emissions: List[ActivityEmission]

# Emission factors (Kg CO₂ per unit)
EMISSION_FACTORS = {
    'Energy Usage (MWh)': 700,         # 700 kg CO₂/MWh
    'Fuel Consumption (L)': 2.31,      # Diesel CO₂ factor
    'Industrial Output (tons)': 150,   # Generalized factor
    'Waste Generated (tons)': 50,      # Waste processing CO₂
    'Transport Distance (km)': 0.2     # Vehicle emissions per km
}

# Model class that will handle both prediction and simple calculation
class CarbonQuantificationModel:
    def __init__(self):
        self.model_path = "simulation/carbon_model.joblib"
        self.scaler_path = "simulation/carbon_scaler.joblib"
        self.model = None
        self.scaler = None
        self.features = [
            'Energy Usage (MWh)', 
            'Fuel Consumption (L)', 
            'Industrial Output (tons)',
            'Waste Generated (tons)', 
            'Transport Distance (km)'
        ]
        self.setup_model()
    
    def setup_model(self):
        # Check if model exists, otherwise create a new one
        if os.path.exists(self.model_path) and os.path.exists(self.scaler_path):
            # Load existing model
            self.model = joblib.load(self.model_path)
            self.scaler = joblib.load(self.scaler_path)
        else:
            # Create and save a simple model
            # In a real implementation, you would train on actual data
            # Here we'll create a basic model that approximates the calculation
            self.model = MultiOutputRegressor(RandomForestRegressor(n_estimators=100, random_state=42))
            self.scaler = StandardScaler()
            
            # Generate synthetic training data
            X, y = self._generate_synthetic_data(1000)
            
            # Fit the scaler
            X_scaled = self.scaler.fit_transform(X)
            
            # Train the model
            self.model.fit(X_scaled, y)
            
            # Save the model and scaler
            joblib.dump(self.model, self.model_path)
            joblib.dump(self.scaler, self.scaler_path)
    
    def _generate_synthetic_data(self, n_samples):
        """Generate synthetic data for model training"""
        np.random.seed(42)
        
        # Generate random input values
        X = pd.DataFrame({
            'Energy Usage (MWh)': np.random.uniform(1, 1000, n_samples),
            'Fuel Consumption (L)': np.random.uniform(1, 10000, n_samples),
            'Industrial Output (tons)': np.random.uniform(1, 1000, n_samples),
            'Waste Generated (tons)': np.random.uniform(1, 5000, n_samples),
            'Transport Distance (km)': np.random.uniform(1, 10000, n_samples)
        })
        
        # Calculate outputs using emission factors with some noise
        emissions = (
            X['Energy Usage (MWh)'] * EMISSION_FACTORS['Energy Usage (MWh)'] +
            X['Fuel Consumption (L)'] * EMISSION_FACTORS['Fuel Consumption (L)'] +
            X['Industrial Output (tons)'] * EMISSION_FACTORS['Industrial Output (tons)'] +
            X['Waste Generated (tons)'] * EMISSION_FACTORS['Waste Generated (tons)'] +
            X['Transport Distance (km)'] * EMISSION_FACTORS['Transport Distance (km)']
        )
        
        # Add some noise
        emissions = emissions * np.random.normal(1, 0.1, n_samples)
        
        # Carbon credits are typically 1:1 with emissions (in tons)
        carbon_credits = emissions / 1000  # Convert kg to tons
        
        # Create output DataFrame
        y = pd.DataFrame({
            'Total Emissions (kg CO₂)': emissions,
            'Carbon Credits Required': carbon_credits
        })
        
        return X, y
    
    def predict(self, department_inputs: List[DepartmentInput]) -> QuantificationResponse:
        """
        Process department inputs and return emissions data
        """
        # Aggregate inputs by department
        total_inputs = {feature: 0 for feature in self.features}
        department_data = {}
        
        for dept in department_inputs:
            dept_dict = {
                'Energy Usage (MWh)': dept.energy_usage,
                'Fuel Consumption (L)': dept.fuel_consumption,
                'Industrial Output (tons)': dept.industrial_output,
                'Waste Generated (tons)': dept.waste_generated,
                'Transport Distance (km)': dept.transport_distance
            }
            
            department_data[dept.name] = dept_dict
            
            # Sum up for total
            for feature in self.features:
                total_inputs[feature] += dept_dict[feature]
        
        # Calculate direct emissions by department
        department_emissions = {}
        total_direct_emission = 0
        
        for dept_name, data in department_data.items():
            dept_emission = 0
            for feature, value in data.items():
                dept_emission += value * EMISSION_FACTORS[feature]
            
            department_emissions[dept_name] = dept_emission
            total_direct_emission += dept_emission
        
        # Calculate direct emissions by activity
        activity_emissions = {}
        for feature in self.features:
            val = total_inputs[feature]
            emis = val * EMISSION_FACTORS[feature]
            activity_emissions[feature] = emis
        
        # Use the ML model for overall prediction
        input_df = pd.DataFrame([total_inputs])
        input_scaled = self.scaler.transform(input_df)
        prediction = self.model.predict(input_scaled)
        
        total_pred_emission = prediction[0][0]
        carbon_credits_required = prediction[0][1]
        
        # Prepare department emissions list
        dept_emissions_list = []
        for dept, emission in department_emissions.items():
            percent = (emission / total_direct_emission) * 100 if total_direct_emission != 0 else 0
            dept_emissions_list.append(
                DepartmentEmission(
                    department=dept,
                    emission=round(emission, 2),
                    percentage=round(percent, 2)
                )
            )
        
        # Prepare activity emissions list
        activity_emissions_list = []
        for activity, emission in activity_emissions.items():
            percent = (emission / total_direct_emission) * 100 if total_direct_emission != 0 else 0
            activity_emissions_list.append(
                ActivityEmission(
                    activity=activity,
                    emission=round(emission, 2),
                    percentage=round(percent, 2)
                )
            )
        
        return QuantificationResponse(
            total_emissions=round(total_pred_emission, 2),
            carbon_credits_required=round(carbon_credits_required, 2),
            department_emissions=dept_emissions_list,
            activity_emissions=activity_emissions_list
        )

# Create singleton instance
carbon_model = CarbonQuantificationModel() 