# Rhombix Technologies Tasks - Backend Server

A Node.js/Express backend API built for the Rhombix Technologies internship tasks. This server powers a college and hospital management system, providing RESTful endpoints for managing students, patients, administrators, doctors, teachers, campus tours, and events. It uses MongoDB with Mongoose for data persistence and is deployed on Vercel.

## Features

- **Student Management** -- CRUD operations for student records via dedicated controllers
- **Admin Management** -- Admin-specific routes and controllers for system oversight
- **Doctor & Teacher Records** -- Schemas and endpoints for managing staff across college and hospital contexts
- **Campus Tours** -- Create and manage campus tour entries
- **Events Management** -- Organize and track institutional events
- **Patient Records** -- Schema support for hospital patient data
- **Vercel Deployment** -- Production-ready deployment configuration for Vercel

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express |
| Database | MongoDB |
| ODM | Mongoose |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance (local or cloud via MongoDB Atlas)
- Vercel CLI (optional, for deployment)

### Installation

```bash
git clone https://github.com/Faze789/rhombix-technologies_tasks_server.git
cd rhombix-technologies_tasks_server
npm install
npm start
```

### Environment Variables

Create a `.env` file in the project root with:

```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```
