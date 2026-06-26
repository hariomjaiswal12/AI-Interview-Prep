# 🚀 AI Interview Prep

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?logo=render)
![License](https://img.shields.io/badge/License-MIT-blue)

An AI-powered MERN Stack application that generates personalized interview preparation strategies from a job description and resume using **Google Gemini AI**.

---

## 🌐 Live Demo

- **Frontend:** https://ai-interview-prep-ten-tau.vercel.app
- **Backend API:** https://ai-interview-prep-chhk.onrender.com

---

## ✨ Features

- 🔐 Secure JWT Authentication
- 🤖 AI Interview Strategy Generation
- 📄 Resume Upload (PDF/DOCX)
- 💼 Job Description Analysis
- 📊 Personalized Interview Plan
- ☁️ Cloud Deployment
- 📱 Responsive Design

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Multer
- Cookie Parser
- CORS

### AI
- Google Gemini API

### Deployment
- Vercel
- Render

---

## 📂 Project Structure

```text
AI-Interview-Prep
│
├── Frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── Backend
│   ├── src
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/hariomjaiswal12/AI-Interview-Prep.git
cd AI-Interview-Prep
```

### Backend

```bash
cd Backend
npm install
npm run dev
```

Runs on:

```
http://localhost:3000
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## 🔑 Environment Variables

### Backend (.env)

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_GENAI_API_KEY=your_gemini_api_key
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:3000
```

For Production

```env
VITE_API_URL=https://your-render-backend-url.onrender.com
```

---

## 📸 Screenshots

### Login

<img width="100%" src="screenshots/login.png">

### Dashboard

<img width="100%" src="screenshots/dashboard.png">

### AI Interview Strategy

<img width="100%" src="screenshots/result.png">

---

## 🔒 Authentication

- JWT Authentication
- HTTP-only Cookies
- Protected Routes
- Password Hashing (bcrypt)

---

## 🚀 Deployment

| Service | Platform |
|---------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

---

## 👨‍💻 Author

**Hariom Jaiswal**

- 💻 GitHub: https://github.com/hariomjaiswal12
- 💼 LinkedIn: https://linkedin.com/in/your-linkedin
- 📧 Email: your-email@example.com

---

## ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is licensed under the **MIT License**.
