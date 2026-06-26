# 🚀 AI Interview Prep Platform

An AI-powered Interview Preparation Platform that helps users generate personalized interview strategies from a Job Description and Resume using Google's Gemini AI.

Users can create an account, upload their resume, provide a job description, and receive a customized interview preparation plan with AI-generated insights.

---

## 🌐 Live Demo

### Frontend
https://ai-interview-prep-ten-tau.vercel.app

### Backend API
https://ai-interview-prep-chhk.onrender.com

---

# ✨ Features

- 🔐 User Authentication (Register/Login/Logout)
- 🍪 Secure JWT Authentication with HTTP-only Cookies
- 📄 Resume Upload (PDF/DOCX)
- 🤖 AI Interview Plan Generation
- 💼 Job Description Analysis
- 📊 Personalized Interview Strategy
- 📱 Responsive UI
- ☁️ Cloud Deployment
- 🔒 Protected Routes
- 🗄 MongoDB Database Integration

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- JavaScript (ES6+)
- Axios
- CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie Parser
- Multer
- CORS

## AI

- Google Gemini API

## Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

# 📂 Project Structure

```
AI-Interview-Prep/
│
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── services/
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/hariomjaiswal12/AI-Interview-Prep.git

cd AI-Interview-Prep
```

---

# Backend Setup

```bash
cd Backend

npm install

npm run dev
```

Backend runs on:

```
http://localhost:3000
```

---

# Frontend Setup

```bash
cd Frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_GENAI_API_KEY=your_google_gemini_api_key
```

---

## Frontend (.env)

```env
VITE_API_URL=http://localhost:3000
```

For Production

```env
VITE_API_URL=https://your-render-backend-url.onrender.com
```

---

# 🔄 Workflow

```
User Registration
        │
        ▼
User Login
        │
        ▼
JWT Authentication
        │
        ▼
Upload Resume
        │
        ▼
Enter Job Description
        │
        ▼
Gemini AI Analysis
        │
        ▼
Personalized Interview Plan
```

---

# 📸 Screenshots

## Login

_Add Screenshot_

---

## Register

_Add Screenshot_

---

## Dashboard

_Add Screenshot_

---

## Generated Interview Strategy

_Add Screenshot_

---

# 🔐 Authentication

This project uses:

- JWT Authentication
- HTTP-only Cookies
- Protected Routes
- Password Hashing (bcrypt)

---

# 🌍 Deployment

### Frontend

Hosted on **Vercel**

### Backend

Hosted on **Render**

### Database

Hosted on **MongoDB Atlas**

---

# 📌 Future Improvements

- ✅ Interview History
- ✅ AI Mock Interview
- ✅ Voice Interview
- ✅ Resume Scoring
- ✅ ATS Resume Analysis
- ✅ Interview Progress Tracking
- ✅ Dark/Light Theme
- ✅ Email Verification
- ✅ Forgot Password

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature-name
```

5. Create a Pull Request

---

# 👨‍💻 Author

**Hariom Jaiswal**

B.Tech CSE Student

MERN Stack Developer

📧 Email: your-email@example.com

💼 LinkedIn:
https://linkedin.com/in/your-profile

🐙 GitHub:
https://github.com/hariomjaiswal12

---

# ⭐ Support

If you like this project,

⭐ Star this repository

🍴 Fork it

📢 Share it with others

---

# 📄 License

This project is licensed under the MIT License.

```

---

## 🔥 To make it look even more professional

Add these badges at the very top:

```md
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![NodeJS](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen?logo=mongodb)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?logo=render)
![License](https://img.shields.io/badge/License-MIT-blue)
```

This style is suitable for showcasing in your portfolio and during internship or placement applications.
