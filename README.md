# interview-ai
# 🎯 AI-Powered Interview Assistant

An intelligent, full-stack web application designed to act as your personalized career coach. By analyzing your resume alongside a target Job Description, this system uses advanced AI (Google Gemini) to generate comprehensive interview preparation reports and dynamically create ATS-friendly tailored resumes.

---

## 🚀 Features

- **Automated Resume Parsing:** Upload your PDF resume; the backend extracts and processes the text automatically.
- **Intelligent Interview Prep Plan:** Generates a detailed report including:
  - 📊 **Match Score:** Calculates how well your resume fits the target Job Description.
  - ❓ **Custom Questions:** Predicts technical and behavioral questions specific to *your* profile and the *target* role, including the interviewer's intention and the ideal answer approach.
  - 📉 **Skill Gap Analysis:** Identifies what you are missing and ranks severity.
  - 📅 **Day-wise Prep Plan:** A structured, day-by-day roadmap to prepare for the interview.
- **Tailored Resume Generation:** Automatically generates a fully formatted, ATS-friendly PDF resume tailored exactly to the target job description.
- **Persistent Dashboard:** Secure user authentication allows you to track and manage all your past applications and reports in one place.

---

## 🛠️ Tech Stack

### Frontend
- **React.js (Vite)**: Lightning-fast development and optimized builds.
- **React Router**: For seamless single-page application navigation.
- **SCSS**: Advanced, modular styling.
- **Axios**: Handling asynchronous API requests.

### Backend
- **Node.js & Express.js**: Robust and scalable server infrastructure.
- **MongoDB & Mongoose**: NoSQL database perfect for storing complex, nested AI-generated JSON documents.
- **Multer**: Middleware for handling in-memory `multipart/form-data` (PDF uploads).
- **PDF-Parse**: Extracting raw text from uploaded PDF buffers.
- **Puppeteer**: Headless browser automation to perfectly render AI-generated HTML into downloadable PDFs.
- **JWT & Bcryptjs**: Secure authentication and password hashing.

### AI Integration
- **Google Gemini SDK (`gemini-2.5-flash`)**: Powering the core analysis and generation logic.
- **Zod**: Enforcing strict JSON schemas on the AI output to prevent hallucinations and guarantee frontend stability.

## 💡 Architecture Highlight: How It Works
1. **Input:** Client uploads a Resume (PDF) and enters a Job Description.
2. **Parsing:** Backend `multer` stores the PDF in RAM, `pdf-parse` extracts the text.
3. **AI Evaluation:** Backend sends the context to Gemini, strictly requesting output via a `Zod` JSON Schema.
4. **Data Presentation:** The highly-structured JSON response is saved to MongoDB and returned to the React frontend for visual rendering.
5. **PDF Engine:** If a tailored resume is requested, Gemini generates raw HTML. Node.js spins up `Puppeteer`, applies A4 sizing and exact margins, captures the render as a PDF buffer, and streams it down to the user for download.
