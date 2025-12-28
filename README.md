# Real-Time Activity Logging System

A simple Node.js backend to log user activities in real time using MongoDB and Redis.

## Features
- Store activity logs in MongoDB
- Cache last 10 activities in Redis
- Auto-expire Redis cache using TTL
- REST API to create and fetch logs

## Tech Stack
- Node.js (Express)
- MongoDB Atlas
- Redis

## Setup
```bash
npm install
npm run dev
```
## Create a .env file:
```bash
PORT=4000
MONGO_URI="your_mongodb_atlas_url"
REDIS_URL=redis://127.0.0.1:6379
```
Make sure MongoDB Atlas IP is whitelisted and Redis is running.

## API Endpoints

- POST /api/log – Create activity log
- GET /api/logs – Get recent logs

## Author

Hamza Rafique