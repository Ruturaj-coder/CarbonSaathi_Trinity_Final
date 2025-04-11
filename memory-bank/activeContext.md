# Active Context

## Current Work Focus
- **COMPLETED**: Implementing the new Carbon Quantification model and associated UI features.
- **COMPLETED**: Adding Environmental Impact Visualization, Predictive Analytics, AI Recommendations, and PDF Report Generation to Quantification results.
- **COMPLETED**: Fixing icon import bugs in `QuantificationResults.jsx`.
- **NEXT**: Implementing the Carbon Sinks module with phased development approach as documented in `carbon-sinks-feature.md`.

## Recent Changes
- Replaced the previous Carbon Quantification feature with a new department-based model.
- Created `DepartmentInputForm.jsx` for user input.
- Created `QuantificationResults.jsx` to display results, including:
  - Department-wise & Activity-wise emission breakdowns (tables and charts using Chart.js).
  - Environmental Impact Equivalents (Trees, Car Distance) using Font Awesome icons (`FaTree`, `FaCar`).
  - Ecosystem Impact Assessment visualization.
  - Predictive Analytics section with a line chart showing future projections based on adjustable business growth.
  - AI-powered recommendations based on emission data and projections.
- Implemented PDF report generation using `jspdf` and `jspdf-autotable` accessible via a "Download Report" button.
- Added a button ("Explore Reduction Strategies") to navigate to the (currently non-existent/placeholder) Carbon Sinks page (`/dashboard/sinks`).
- Created a FastAPI backend service for the new quantification model using a RandomForest model trained (presumably) on relevant data.
- Fixed `SyntaxError` in `QuantificationResults.jsx` by replacing problematic Feather Icons (`FiCar`, `FiTree`) with Font Awesome icons (`FaCar`, `FaTree`).
- **New**: Created comprehensive Carbon Sinks feature plan with phased implementation approach in `carbon-sinks-feature.md`.
- **Previous (Simulation context):**
  - Created a new `EmissionsTrajectoryChart` component using Chart.js for modern, interactive visualizations.
  - Updated `SimulationResults` component to use the new chart component instead of canvas-based rendering.
  - Enhanced `carbonCalculator.js` to use actual emission sources from scenario data instead of generic scope categories.
  - Modernized `ScenarioComparison` component with interactive filters and multiple metrics (emissions, reduction, cost, ROI).
  - Fixed issue where simulation charts were showing generic "Scope 1, 2, 3" labels instead of actual emission sources.
  - Added support for Indian currency (₹) and localized context in simulation calculations.
  - Implemented dynamic technology sizing and cost calculations with region-specific variations for simulation.
  - Added color-coded visualization improvements for better data interpretation in simulation.
- **New**: Added detailed specification and development plan for the combined Carbon Marketplace feature

## Next Steps
1. **Carbon Sinks Module Implementation (Current Focus)**:
   - **Phase 1 (1-2 weeks)**: Implement Core Assessment & Gap Analysis (MVP)
     - Develop Sink Input Form for forest, wetland, soil assets
     - Create Basic Calculation Engine for sequestration estimation
     - Build Gap Analysis Dashboard with visualization

   - **Phase 2 (2-3 weeks)**: Add Enhanced Analytics & AI Recommendations
     - Integrate Gemini API for intelligent recommendations
     - Develop Advanced Sink Assessment features
     - Implement Scenario Modeling Tool

   - **Phase 3 (3-4 weeks)**: Build Comprehensive Sink Management
     - Add Remote Sensing Integration
     - Develop Verification & Monitoring System
     - Create Collaborative Sink Development tools

   - **Phase 4 (4+ weeks)**: Implement Advanced Features
     - Add Digital Twin Technology
     - Develop Micro-Sink Enablement tools
     - Implement Bioregional Matching System

2. **Marketplace Module** (After Carbon Sinks):
   - Design UI for browsing and trading carbon credits/offsets.
   - Implement backend logic for transactions (no blockchain).
   - Integrate marketplace data with user profiles and reports.

3. **Simulation Module Enhancements** (Lower Priority):
   - Add comparative analysis dashboard.
   - Implement exportable reports formatted for Indian stakeholders.
   - Create downloadable PDF reports with comprehensive analysis.
   - Improve filtering capabilities for technology selection.
   - Add guided workflow for scenario creation.
   - Implement scenario templates for common industry use cases.
   - Implement state-specific subsidy calculations.
   - Add sensitivity analysis for key parameters.
   - Integrate ML-based technology recommendation engine.

4. **General Improvements**:
   - Enhance mobile responsiveness across the application.
   - Improve error handling, especially for API calls and calculations.
   - User onboarding and tutorials.

## Active Decisions and Considerations
- **Feature Prioritization**: Carbon Quantification revamp completed. Next major feature is Carbon Sinks module with phased implementation.
- **Icon Library Choice**: Switched from Feather Icons (`fi`) to Font Awesome (`fa`) for specific icons (`FaCar`, `FaTree`) in `QuantificationResults.jsx` due to import errors. Will use Font Awesome for new Carbon Sinks components.
- **Data Representation**: Will use Chart.js for visualizations in Carbon Sinks, following the pattern established in Quantification module.
- **AI Integration**: Plan to use Gemini API for sink recommendations and natural language explanations in Phase 2.
- **Performance**: Need to ensure calculation engines remain efficient, especially with complex sink calculations.
- **Development Approach**: Using phased implementation to deliver functionality incrementally, starting with MVP in Phase 1.
- **Marketplace Separation**: Carbon Offset Marketplace and Carbon Credit Marketplace will remain separate from the Carbon Sinks module, accessible through different dashboard tabs.

## Current Project Status
A major milestone was reached with the successful implementation and integration of the new Carbon Quantification model. This included a new user input form, a comprehensive results page with advanced visualizations, predictive analytics, AI-driven recommendations, and PDF reporting.

The focus has now shifted to implementing the Carbon Sinks module, which will build upon the Quantification results by helping organizations assess their existing carbon sinks, calculate sequestration capacity, and bridge the gap between emissions and absorption. A comprehensive phased development plan has been created for this feature in `carbon-sinks-feature.md`.

The development will begin with the Phase 1 MVP, focusing on the core functionality needed to deliver immediate value: the Sink Input Form, Basic Calculation Engine, and Gap Analysis Dashboard.

## Current Focus
The project is currently in the initial planning and setup phase. We are establishing the project requirements, defining the architecture, and preparing for development. The immediate focus is on:

1. Finalizing the project scope and core feature set
2. Setting up the development environment
3. Creating the initial project structure
4. Planning the implementation roadmap
5. Developing the combined Carbon Marketplace feature

## Recent Changes
- Created the memory bank to document project requirements and architecture
- Defined the project scope, expanding from coal mines to general organizational carbon management
- Identified key features and technical stack
- Documented the detailed user journey and workflow for each feature
- Added detailed specification and development plan for the combined Carbon Marketplace feature

## Next Steps
1. **Environment Setup**:
   - Initialize the project repository
   - Set up the frontend framework (Vite + React)
   - Configure backend services (Node.js + Express)
   - Set up the database infrastructure

2. **Core Architecture Implementation**:
   - Create the basic application structure
   - Implement authentication system
   - Set up database models and schemas
   - Develop core API endpoints

3. **Feature Development Prioritization**:
   - Begin with Carbon Quantification module as the foundation
   - Follow with Carbon Sinks and Gap Analysis
   - Implement Pathway Simulation
   - Develop data visualization components
   - Implement the Combined Carbon Marketplace feature
   - Later add Reward features

4. **UI/UX Design**:
   - Create wireframes for key user interfaces
   - Design the component library with Tailwind CSS
   - Implement responsive layouts
   - Develop interactive visualization components

## Active Decisions
1. **Technology Stack**: Confirmed the use of Vite + React, Node.js + Express, FastAPI, and MongoDB as the primary technologies
2. **Architecture Approach**: Decided on a microservices architecture to allow for scalability and independent deployment
3. **Development Priority**: Starting with core emission quantification features before moving to more complex simulation and marketplace features
4. **AI Integration**: Planning to integrate AI/ML gradually, starting with basic models and expanding as the project matures
5. **Target Users**: Generalizing the application to serve various industries beyond the initial coal mining focus
6. **Marketplace Implementation**: Decided to implement a combined Carbon Credit and Offset Marketplace without blockchain technology

## Open Questions
1. **ML Model Complexity**: What level of detail should the initial emission prediction and simulation models have?
2. **Data Sources**: What are the best sources for emission factors and carbon sink data across different industries?
3. **User Onboarding**: How to streamline the data entry process for new users while ensuring data quality?
4. **Deployment Strategy**: What cloud infrastructure is most cost-effective for the initial launch?
5. **MVP Scope**: What features are essential for a minimum viable product versus those that can be added later?
6. **Marketplace Security**: What alternative security measures will be used for the Carbon Marketplace since blockchain won't be implemented?

## Current Challenges
1. **Technical Complexity**: Balancing the complexity of the AI/ML components with the need for rapid development
2. **Data Accuracy**: Ensuring accurate emission calculations across different industries and activities
3. **Resource Constraints**: Developing a complex application with limited resources (student project)
4. **Integration Complexity**: Managing the integration between multiple technologies and services
5. **User Experience**: Creating an intuitive interface for complex data entry and visualization
6. **Performance Optimization**: Ensuring that simulation and analytics features perform well with large datasets
7. **Marketplace Trust**: Establishing trust and security in the Carbon Marketplace without blockchain technology

# Active Development Context

## Current Focus
We are currently focused on implementing the Pathway Simulation module for the CarbonSaathi platform. This module allows organizations to create, simulate, and compare different carbon reduction scenarios to find optimal pathways to meet their sustainability goals.

## Recent Progress
- Implemented the core UI components for the Pathway Simulation feature:
  - LoadingSpinner component for loading states
  - TechnologyLibrary component for browsing carbon reduction technologies
  - ScenarioCreation component with multi-step workflow for creating scenarios
  - TechnologyCard component for displaying selected technologies
  - SimulationResults component for visualizing simulation outcomes
  - ComparisonChart component for comparing different scenarios
  - OptimizationPanel component for optimizing pathways based on objectives and constraints

- The backend API structure for pathway simulation has been established with endpoints for:
  - Retrieving emission data
  - Simulating scenarios
  - Running Monte Carlo simulations
  - Optimizing pathways based on multiple objectives
  - Retrieving available technologies and operational changes

## Next Steps
1. **Data Visualization Enhancement**:
   - Implement actual charts instead of placeholder elements in SimulationResults and ComparisonChart components
   - Add interactive elements to charts (hover tooltips, zooming, filtering)

2. **Backend Integration**:
   - Connect frontend components to the backend API endpoints
   - Replace mock data with actual API responses

3. **User Experience Improvements**:
   - Add form validation for all user inputs
   - Implement notifications for successful/failed operations
   - Optimize loading states and transitions between views

4. **Feature Expansion**:
   - Add support for scenario templates/presets for quicker scenario creation
   - Implement Monte Carlo simulation visualization for uncertainty analysis
   - Add sensitivity analysis for key parameters

## Active Decisions and Considerations
- **Data Handling**: We need to decide on an efficient data structure for storing and calculating emissions across different scopes
- **Chart Libraries**: Need to select an appropriate charting library (D3.js, Chart.js, Recharts, etc.) based on our visualization needs
- **API Design**: Considering RESTful vs GraphQL approach for the backend API
- **Performance Optimization**: Need to ensure smooth performance when dealing with large datasets and complex calculations 