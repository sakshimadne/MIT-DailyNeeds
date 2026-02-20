MIT-Daily 🛒
Smart Student Marketplace with AI Recommendations

MIT-Daily is a full-stack MERN marketplace platform designed primarily for students.
It allows users to explore products based on category, region, and personalized recommendations.

The platform intelligently suggests products tailored for:

🇮🇳 Indian Students → Cookers, pans, kettles, basic kitchen bundles, etc.

🌍 Foreign Students → Study desks, electronics bundles, starter kits, etc.

The system also includes an AI Assistant, product filtering, region-based suggestions, and a feedback system.

🚀 Live Demo

🔗 Frontend (Deployed): https://mit-daily.vercel.app

🔗 Backend API (Deployed): https://mit-daily-api.onrender.com

📂 GitHub Repository: https://github.com/dummyuser/mit-daily

(Dummy links — replace with actual links later)

🏗️ Tech Stack
Frontend

React.js

React Router DOM

Axios

CSS (Custom Styling)

Context-based Routing Layout

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

bcrypt (Password Hashing)

CORS

dotenv

Google Generative AI (AI Assistant)

📌 Core Features
🏠 Homepage

Hero section with bundle offers

Search functionality

Region & Category filter

AI Assistant floating button

Navigation (Home, Feedback, Category, Logout)

🗂 Category Page

Browse products by category

Filter by:

Region

Price

Sort options

Modal popup for product details

Add to Cart functionality

🎯 Personalized Recommendations

Recommended products based on:

Student region (India / Foreign)

Product usage patterns

Displays “Recommended” badge on cards

🤖 AI Assistant

Integrated using Google Generative AI

Helps users:

Find relevant products

Suggest bundles

Answer marketplace-related queries

📝 Feedback System

Star Rating (1–5)

User Name

Comments

Stores feedback in MongoDB

View user feedbacks section

🔐 Authentication

Login

Register

JWT-based secure authentication

Password hashing using bcrypt

📂 Project Structure
🔹 Backend Structure
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── chatController.js
│   ├── marketplaceController.js
│   ├── orderController.js
│   ├── productController.js
│   └── userController.js
│
├── models/
│   ├── ChatHistory.js
│   └── productModel.js
│
├── routes/
│   ├── chatRoutes.js
│   └── marketplaceRoutes.js
│
├── .env
├── package.json
└── server.js
Backend Responsibilities

MongoDB connection

API endpoints

Authentication

AI assistant integration

Product filtering logic

Feedback storage

🔹 Frontend Structure
frontend/
│
├── src/
│   ├── Authpage/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │
│   ├── components/
│   │   └── Chatbot.jsx
│   │
│   ├── pages/
│   │   ├── Category/
│   │   │   ├── Category.jsx
│   │   │   ├── CategoryCard.jsx
│   │   │   └── BundlesHome.jsx
│   │   │
│   │   ├── AddCart.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Feedback.jsx
│   │   ├── StudentDiscount.jsx
│   │   ├── bundleOffer.jsx
│   │   └── ProductDetails.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
Frontend Responsibilities

Routing with BrowserRouter

Layout handling (Navbar hide on login/register)

Product display & filtering

Feedback form UI

AI assistant UI integration

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/dummyuser/mit-daily.git
cd mit-daily
2️⃣ Backend Setup
cd backend
npm install

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
GOOGLE_API_KEY=your_google_ai_key

Run backend:

npm start
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
🧠 Personalization Logic

The system categorizes products based on:

Region (India / Asia / Global)

Category Type (Kitchen, Study, Fitness, Electronics)

Bundle suggestions

AI-based conversation assistance

Example:

Indian students → Cooker, Kettle, Cookware Set

Foreign students → Study Desk, Electronics Kit, Starter Bundle

📈 Future Improvements

Payment Gateway Integration

Wishlist Feature

Admin Dashboard

Real-time Chat

Advanced AI Product Recommendation Engine

Order History Tracking

👨‍💻 Author

Sakshi Madne
Full Stack Developer (MERN)

📜 License

This project is for educational and demonstration purposes.

If you want, I can also:

Create a professional GitHub description

Create a LinkedIn project description

Generate a project architecture diagram

Create a resume-ready project summary (ATS optimized)