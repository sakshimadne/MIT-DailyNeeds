MIT-DailyNeeds 🛒

Smart Student Marketplace with AI Recommendations

🔗 Live Demo

Frontend (Vercel):
https://mit-daily-needs.vercel.app

Backend (Render):
https://mit-dailyneeds.onrender.com

📌 Overview

MIT-DailyNeeds is a full-stack MERN marketplace platform designed primarily for students.

The platform allows users to:

Browse categorized products

Get personalized recommendations

Add products to cart

Submit feedback

Use an AI assistant for product guidance

The system uses a hybrid architecture:

MongoDB + Express for core marketplace logic

Firebase Realtime Database for feedback storage

AI integration for smart responses

🏗️ Tech Stack
Frontend

React (Vite)

React Router DOM

Axios

CSS

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

CORS

Database

MongoDB (Products, Users, Cart)

Firebase Realtime Database (Feedback)

Deployment

Frontend → Vercel

Backend → Render

Database → MongoDB Atlas

Feedback → Firebase

🚀 Features
🔐 Authentication

User Registration

Login with JWT

Protected Cart operations

🛍 Marketplace

Product listing with filters

Region-based filtering

Price sorting

Personalized recommendations

Pagination

🛒 Cart System

Add to cart

Remove from cart

Token-based authorization

💬 AI Assistant

Context-aware AI responses

Product & recommendation awareness

⭐ Feedback System

Firebase-based real-time feedback submission

Ratings (1–5 stars)

Public feedback display

📂 Project Structure
MIT-DailyNeeds/
│
├── Backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
│
├── Frontend/
│   ├── src/
│   │   ├── Authpage/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── utils/
│   │   └── App.jsx
│   └── vite.config.js
│
└── README.md
⚙️ Environment Variables
Backend (.env)
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Frontend (.env)
VITE_API_URL=https://mit-dailyneeds.onrender.com
🧪 Running Locally
1️⃣ Clone Repository
git clone https://github.com/sakshimadne/MIT-DailyNeeds.git
2️⃣ Run Backend
cd Backend
npm install
npm start

Runs on:

http://localhost:5000
3️⃣ Run Frontend
cd Frontend
npm install
npm run dev

Runs on:

http://localhost:5173
🔐 API Endpoints
Auth

POST /api/register

POST /api/login

Marketplace

GET /api/marketplace

GET /api/marketplace/recommendations

GET /api/marketplace/:id

Cart

GET /api/carts

POST /api/carts

DELETE /api/carts/:id

AI

POST /api/Ai

📊 Architecture Overview
React (Vercel)
        ↓
Express API (Render)
        ↓
MongoDB Atlas

Feedback → Firebase Realtime Database
🧠 Key Concepts Implemented

RESTful API Design

JWT Authentication

Protected Routes

Hybrid Database Architecture

CORS Handling

Environment-based Configuration

Production Deployment Workflow

Case-sensitive build fixes (Linux vs Windows)

🎯 Future Improvements

Payment Gateway Integration

Admin Dashboard

Order Management

Image Upload with Cloud Storage

Advanced AI recommendation engine

Role-based access control

👩‍💻 Author

Sakshi Madne

Full Stack Developer
MERN Stack | React | Node | MongoDB