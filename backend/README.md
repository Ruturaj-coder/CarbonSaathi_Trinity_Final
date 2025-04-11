# CarbonSaathi Backend Service

Backend API service for CarbonSaathi - A Carbon Footprint Management Platform.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcryptjs for password hashing
- CORS enabled

## Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

## Project Structure

```
backend/
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── models/        # MongoDB models
│   ├── routes/        # API routes
│   ├── middleware/    # Custom middleware
│   └── index.js       # Entry point
├── .env               # Environment variables
├── .gitignore        # Git ignore file
├── package.json      # Dependencies and scripts
└── README.md         # Documentation
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/carbonsaathi
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

## Installation

1. Clone the repository
2. Navigate to the backend directory
3. Install dependencies:
```bash
npm install
```

## Running the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Authentication

#### Register User
- **POST** `/api/auth/register`
- **Body:**
```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "role": "string (optional)",
  "company": {
    "name": "string",
    "size": "string",
    "industry": "string"
  },
  "mainGoal": "string",
  "heardFrom": "string",
  "agreeTerms": "boolean"
}
```
- **Response:**
```json
{
  "_id": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "role": "string",
  "company": {
    "name": "string",
    "size": "string",
    "industry": "string"
  },
  "token": "string"
}
```

#### Login User
- **POST** `/api/auth/login`
- **Body:**
```json
{
  "email": "string",
  "password": "string"
}
```
- **Response:**
```json
{
  "_id": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "role": "string",
  "company": {
    "name": "string",
    "size": "string",
    "industry": "string"
  },
  "token": "string"
}
```

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

## Error Handling

The API returns standard HTTP status codes and error messages in the following format:

```json
{
  "message": "Error message description"
}
```

Common status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error

## Development Guidelines

1. **Code Style**
   - Use ES6+ features
   - Follow the existing project structure
   - Use async/await for asynchronous operations
   - Add appropriate error handling

2. **Git Workflow**
   - Create feature branches from main
   - Use meaningful commit messages
   - Submit pull requests for review

3. **Testing**
   - Write unit tests for new features
   - Test API endpoints using Postman/Insomnia
   - Verify error handling

4. **Documentation**
   - Update README.md with new endpoints
   - Document complex functions and workflows
   - Keep API documentation up to date

## Future Enhancements

- [ ] Implement refresh tokens
- [ ] Add password reset functionality
- [ ] Implement email verification
- [ ] Add user profile management
- [ ] Enhance error handling and validation
- [ ] Add rate limiting
- [ ] Implement logging system

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the ISC License. 