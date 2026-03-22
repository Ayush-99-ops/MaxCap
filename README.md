# MaxCap Interactive Learning Platform

An "Industry Level" interactive coding learning platform featuring real-time code execution, gamification, a custom community forum, and an elegant glassmorphism frontend.

![Platform Aesthetics](https://via.placeholder.com/800x400.png?text=MaxCap+Platform)

## 🚀 Tech Stack

- **Frontend**: React (Vite) + Pure Vanilla CSS (Glassmorphism & Responsive)
- **Backend**: Python + Django + Django REST Framework
- **Database**: PostgreSQL (Neon Serverless DB Ready)
- **Infrastructure**: Fully Dockerized (Nginx for Frontend + Gunicorn for Backend)

## 🛠️ Features
- **Integrated Code Editor**: Writing and executing code natively via Monaco Editor.
- **Gamification**: Points, Leaderboards, and user leveling systems.
- **Microservices Architecture**: Completely separated Frontend & Backend connected via REST and CORS.

## 📦 Getting Started (Local Development)

### 1. Environment Setup
Copy the `.env.example` to `.env` in the `backend/` directory:
```bash
cp backend/.env.example backend/.env
```
_(Fill out the file with your specific Neon Database URL and development settings.)_

### 2. Docker Execution
Ensure Docker Desktop or the Docker daemon is running. Boot up the entire stack using Compose:
```bash
docker-compose up --build
```

### 3. Run Migrations
Generate the database schema on Neon:
```bash
docker-compose exec backend python manage.py migrate
```

- **Frontend**: `http://localhost:80` (or `5173`)
- **Backend API**: `http://localhost:8000`

## ☁️ AWS EC2 Production Deployment

The `frontend/Dockerfile` uses a multi-stage Nginx build, and `docker-compose.yml` serves Django via Gunicorn.
Follow the deployment guide to prepare your EC2 instance, adjust your `ALLOWED_HOSTS` and `CORS` in the production `.env`, and you're good to go!
