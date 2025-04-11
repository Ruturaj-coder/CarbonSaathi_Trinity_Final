# System Patterns

## Architecture
CarbonSaathi will follow a modern, modular architecture with clear separation of concerns:

1. **Frontend Layer**:
   - Single-page application built with Vite + React
   - Component-based UI architecture with reusable modules
   - State management for complex data flows
   - Responsive design for cross-device compatibility

2. **Backend Services**:
   - RESTful API layer (Node.js + Express) for core application functions
   - High-performance computing services (FastAPI) for AI/ML operations
   - Blockchain nodes for marketplace transactions
   - Microservices design for scalability and independent deployment

3. **AI/ML Layer**:
   - Deep learning models for emission prediction and simulation
   - NLP services for context-aware recommendations
   - RAG (Retrieval-Augmented Generation) for enhanced report generation
   - Model training and inference pipelines

4. **Data Layer**:
   - Document database (MongoDB) for primary application data
   - Graph database (Neo4j) for relationship-heavy marketplace data
   - Vector database (FAISS) for semantic search capabilities
   - Cloud storage (Firebase) for documents and media assets

5. **Integration Layer**:
   - API gateways for third-party services
   - Event bus for asynchronous communication between services
   - IoT connectors for sensor data integration
   - Webhooks for real-time notifications

## Design Patterns

1. **Frontend**:
   - Component Composition: Building complex UIs from smaller, reusable components
   - Container/Presenter Pattern: Separating data logic from presentation
   - React Hooks: For state and side-effect management
   - Context API: For managing global application state

2. **Backend**:
   - Repository Pattern: Abstracting data access logic
   - Middleware Pattern: For request processing, authentication, and logging
   - Factory Pattern: For creating complex objects with specific configurations
   - Strategy Pattern: For implementing different algorithm variants

3. **AI/ML**:
   - Pipeline Pattern: For sequential data processing and transformation
   - Observer Pattern: For monitoring model performance and triggering retraining
   - Adapter Pattern: For integrating different AI frameworks
   - Composite Pattern: For combining multiple models for ensemble predictions

4. **Data Management**:
   - Unit of Work: For transaction management
   - CQRS (Command Query Responsibility Segregation): For separating read and write operations
   - Event Sourcing: For tracking changes to application state
   - Data Mapper: For transforming data between database and domain models

## Component Structure

1. **Core Modules**:
   - Carbon Quantification Module (New model implemented: FastAPI backend, React frontend w/ Chart.js, jsPDF reports)
   - Carbon Sinks Module
   - Pathway Simulation Module
   - Credit Marketplace Module
   - Offset Marketplace Module
   - Reward System Module
   - Rankings Module
   - Data Analytics Module

2. **Supporting Services**:
   - Authentication Service
   - User Management Service
   - Notification Service
   - Reporting Service
   - Blockchain Service
   - AI/ML Service
   - Data Import/Export Service
   - Integration Service

3. **Cross-Cutting Concerns**:
   - Logging and Monitoring
   - Security
   - Caching
   - Error Handling (Improved in Quantification UI)
   - Configuration Management
   - Performance Optimization

## Data Flow

1. **User Input Flow**:
   - User enters data through frontend forms
   - Data is validated client-side
   - Validated data is sent to backend APIs
   - Backend processes and transforms data
   - Data is stored in primary database

2. **Computation Flow**:
   - User triggers computation (e.g., emission calculation, simulation)
   - Backend retrieves necessary data from databases
   - Computation request is sent to appropriate service (Express or FastAPI)
   - AI/ML models process the request
   - Results are stored and returned to frontend

3. **Marketplace Flow**:
   - User initiates marketplace transaction
   - Smart contract parameters are defined
   - Blockchain service validates and executes the transaction
   - Transaction details are recorded in database
   - Confirmation is sent to user

4. **Analytics Flow**:
   - User requests analytics or report
   - Backend aggregates data from multiple sources
   - AI services generate insights and recommendations
   - Visualization data is prepared and sent to frontend
   - User interacts with visualizations for deeper analysis

## Security Considerations

1. **Authentication and Authorization**:
   - JWT-based authentication
   - Role-based access control
   - Multi-factor authentication for sensitive operations
   - Session management and timeout policies

2. **Data Security**:
   - Encryption of sensitive data at rest and in transit
   - Data anonymization for analytics
   - Regular security audits and penetration testing
   - Compliance with relevant data protection regulations

3. **Blockchain Security**:
   - Smart contract auditing
   - Secure key management
   - Transaction validation mechanisms
   - Protection against common blockchain vulnerabilities

4. **API Security**:
   - Rate limiting
   - Input validation and sanitization
   - Protection against common attack vectors (CSRF, XSS, etc.)
   - API keys and access token management

## Scalability Approach

1. **Horizontal Scaling**:
   - Containerization of services with Docker
   - Orchestration with Kubernetes for automatic scaling
   - Load balancing across multiple instances
   - Stateless service design

2. **Database Scaling**:
   - Sharding for distributing data across multiple servers
   - Read replicas for scaling read operations
   - Caching layer (Redis) for frequently accessed data
   - Database connection pooling

3. **Computation Scaling**:
   - Asynchronous processing for compute-intensive tasks
   - Job queues for managing workloads
   - Batch processing for large datasets
   - GPU acceleration for ML model inference

4. **Global Accessibility**:
   - Content delivery networks (CDNs) for static assets
   - Edge computing for reducing latency
   - Regional deployment for compliance with local regulations
   - Offline capabilities for limited connectivity scenarios

## Architecture Patterns

### Frontend Architecture
The frontend follows a component-based architecture using React with the following key patterns:

1. **Container/Presentational Pattern**
   - Container components manage state and data flow
   - Presentational components handle rendering and user interaction
   - Example: SimulationPage (container) uses SimulationResults (presentational)

2. **Composition Pattern**
   - Complex UIs built by composing smaller, reusable components
   - Components have well-defined props interfaces
   - Example: ScenarioCreation composes multiple form sections and TechnologyCard components

3. **Unidirectional Data Flow**
   - State flows down from parent to child via props
   - Events/actions flow up via callback functions
   - Example: Selected technologies flow from TechnologyLibrary to parent components

4. **Custom Hooks for Logic Reuse**
   - Logic extracted into reusable hooks
   - Example: useLocalStorage hook for storing/retrieving data

### Backend Architecture
The backend follows a service-oriented architecture with these patterns:

1. **API Gateway Pattern**
   - Single entry point for client requests
   - Routes requests to appropriate services

2. **Service Layer Pattern**
   - Separate business logic from routes
   - Services encapsulate domain-specific operations

3. **Repository Pattern**
   - Abstract database operations
   - Repositories provide an interface for data access

## Data Management Patterns

1. **Local State Management**
   - React useState for component-specific state
   - React useReducer for complex state logic
   - Example: SimulationPage manages scenario state

2. **Client-Side Storage**
   - localStorage for persisting scenarios and simulation results
   - Serialization/deserialization of complex objects
   - Example: Scenarios stored in localStorage via saveScenario utility

3. **Data Transformation**
   - Adapter functions to transform between API and UI data formats
   - Pure transformation functions in utility files
   - Example: carbonCalculator.js transforms scenario data into emission projections

## Visualization Patterns

1. **Chart Abstraction Pattern**
   - Dedicated chart components that wrap third-party libraries (Chart.js)
   - Props-based configuration for flexibility
   - Internal state management for interactive features
   - Example: EmissionsTrajectoryChart component encapsulating Chart.js functionality

2. **Dynamic Data Mapping**
   - Transforming domain data to visualization-ready format
   - Mapping emission sources to visual properties (colors, labels)
   - Supporting fallback patterns when data is missing
   - Example: Mapping user-defined emission sources to chart datasets

3. **Interactive Visualization Pattern**
   - Tooltips for detailed data exploration
   - Filters and controls for customizing views
   - Multiple visualization modes for different insights
   - Example: ScenarioComparison with emissions/reduction/cost/ROI views

4. **Responsive Visualization**
   - Canvas sizing based on container dimensions
   - Appropriate data density for different screen sizes
   - Touch-friendly interaction patterns
   - Example: Charts automatically resize based on viewport

5. **Visual Hierarchy Pattern**
   - Primary metrics prominently displayed
   - Secondary information accessible but not overwhelming
   - Consistent color coding for data categories
   - Example: Emissions trajectory with stacked sources and reduction line

## Component Patterns

1. **Form Management**
   - Controlled components for form inputs
   - Multi-step forms with progress tracking
   - Form validation and error handling
   - Example: ScenarioCreation with multi-step workflow

2. **List and Selection**
   - Filterable lists with search functionality
   - Selection mechanisms (checkboxes, toggle buttons)
   - Pagination or virtualization for large lists
   - Example: TechnologyLibrary with filtering and selection

3. **Data Display**
   - Cards for compact data representation
   - Tables for structured data
   - Charts for trend visualization
   - Example: SimulationResults using combination of tables and charts

4. **Feedback Patterns**
   - Loading states with spinners
   - Error messages with recovery options
   - Success confirmations
   - Example: LoadingSpinner component used during calculations

## Code Patterns

### Naming Conventions
- **Components**: PascalCase (e.g., EmissionsTrajectoryChart)
- **Hooks**: camelCase with 'use' prefix (e.g., useLocalStorage)
- **Utilities**: camelCase (e.g., calculateEmissionReductions)
- **Files**: Component files match component name (e.g., EmissionsTrajectoryChart.jsx)

### File Organization
- **components/**: UI components grouped by feature/type
  - **ui/**: Reusable UI elements (buttons, spinners)
  - **layout/**: Layout components (header, sidebar)
  - **simulation/**: Simulation-specific components
  - **charts/**: Visualization components
- **utils/**: Utility functions and helpers
- **hooks/**: Custom React hooks
- **services/**: API integration and services
- **pages/**: Top-level page components

### State Management
- Component-local state for UI state
- Props for passing data between related components
- localStorage for persistence across sessions
- Context API for global state (authentication)

## Testing Patterns

1. **Component Testing**
   - Unit tests for individual components
   - Snapshot testing for UI stability
   - Integration tests for component interactions

2. **Utility Testing**
   - Pure function tests with known inputs/outputs
   - Edge case coverage
   - Example: Testing carbonCalculator.js with various scenarios

3. **Visual Regression Testing**
   - Screenshot comparison for chart components
   - Testing across different viewport sizes

## Optimization Patterns

1. **Memoization**
   - React.memo for expensive renders
   - useMemo for expensive calculations
   - useCallback for stable callback references

2. **Lazy Loading**
   - Code splitting for route-based components
   - Deferred loading of heavy libraries

3. **Performance Optimization**
   - Debouncing for frequent updates (chart resizing)
   - Canvas optimization for smooth rendering
   - Efficient data processing in calculation utilities 