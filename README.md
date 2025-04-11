# CarbonSaathi - Carbon Footprint Management Platform

CarbonSaathi is a comprehensive platform designed to help organizations track, manage, and reduce their carbon footprint through data-driven insights and actionable recommendations.

## Project Architecture

The project uses a mixed architecture:

1. **Frontend:** React application (Vite)
   - Modern UI with Tailwind CSS
   - Responsive design for all devices
   - Chart.js for data visualization

2. **Main Backend:** Node.js + Express
   - Handles authentication, user management
   - Manages general API functionality
   - MongoDB for data storage

3. **Simulation Backend:** Python + FastAPI
   - Powers the carbon reduction simulation feature
   - Provides technology recommendations
   - Handles complex calculations and AI features

## Features

### Carbon Reduction Simulation

Plan and model emission reduction scenarios:

- **Technology Library:** Browse available carbon reduction technologies
- **Scenario Creation:** Build custom reduction scenarios
- **Simulation Results:** View detailed analysis of emission reductions, costs, and implementation paths

## Running the Project

### Prerequisites

- Node.js 16+ and npm
- Python 3.9+ (for simulation backend)
- MongoDB (or use MongoDB Atlas)

### Starting the Node.js Backend

```bash
cd backend
npm install
npm run dev
```

This will start the main backend server on port 3001.

### Starting the Python Simulation Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # On Windows
source venv/bin/activate  # On macOS/Linux
pip install -r requirements.txt
uvicorn main:app --reload
```

This will start the simulation API on port 8000.

### Starting the Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at http://localhost:5173

## Testing the Features

1. Navigate to http://localhost:5173
2. Log in or create an account
3. Go to Dashboard → Simulation

### Technology Library
- Browse different carbon reduction technologies
- View detailed information about implementation costs, efficiency, and case studies
- Filter technologies by category or search by name/description

### Scenario Creation
- Create new reduction scenarios with business profile information
- Add emission sources and their amounts
- Adjust priorities using sliders (cost, timeframe, impact)
- Set budget constraints
- Browse and select technologies

### Simulation Results
- View projected emission reductions over time
- See financial analysis including ROI and payback period
- Review implementation timeline for selected technologies

## Development Notes

### Current Status

The application is in development with mock data for several features. The simulation API is partially implemented and integrated with the main application.

### API Endpoints

- Node.js Backend: `http://localhost:3001/api/*`
- Python Simulation: `http://localhost:8000/api/simulation/*`

Available simulation endpoints:
- GET `/api/simulation/technologies` - Get available technologies
- GET `/api/simulation/categories` - Get technology categories
- POST `/api/simulation/recommend` - Generate recommendations

## License

Copyright © 2023 CarbonSaathi. All rights reserved. 