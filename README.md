# Tiniest blockchain implementation

To run locally, run `docker-compose up -d`.

Swagger documentation documentation should be available at: `http://localhost:3000/documentation`.

Backend endpoints are available from `http://localhost:3000`.

Frontend is served from `http://localhost:4200` and is communicating with the backend via CORS.

To run tests:
- Run `npm install` for both backend and frontend
- For backend endpoints and blockchain run: `npm test`
- For frontend: `cd frontend && npm test`
