# SkillSync AI — AI-Powered Resume Analyzer

SkillSync AI is a full-stack MERN application that analyzes a candidate's resume against a target job description using AI. It generates a comprehensive interview preparation report featuring a resume match score, tailored technical and behavioral interview questions, skill gap analysis, and a personalized preparation roadmap.

The platform helps job seekers evaluate how well their resume aligns with a specific role, identify areas for improvement, and prepare effectively for technical and behavioral interviews with AI-driven insights.
---

## ✨ Features

### 🔐 Authentication

* User registration and login
* JWT authentication using HTTP-only cookies
* OTP email verification
* Secure logout with token blacklisting
* Protected routes

### 📄 Resume Analysis

* Upload PDF resumes
* Extract resume text from PDF files
* Enter a self-description
* Provide a target job description
* AI-powered resume evaluation

### 🤖 AI Interview Report

Google Gemini generates a detailed report including:

* 📊 Resume Match Score (0–100)
 
* 💻 Technical Interview Questions
  * Intent
  * Sample Answer

* 🗣 Behavioral Interview Questions
  * Intent
  * Sample Answer

* 📈 Skill Gap Analysis
  * Missing skills
  * Severity (Low / Medium / High)

* 📅 Personalized Preparation Plan
  * Goals
  * Focus areas


### 📂 Report Management

* Generate interview reports
* View previously analyzed resumes
* Persistent report history

### 🎨 User Experience

* Responsive design
* Modern dark theme
* Dashboard interface
* Loading states
* Toast notifications

---

# 🛠 Tech Stack

## Frontend

* React (Vite)
* React Router
* Tailwind CSS v4
* Ax
* React Hot Toast
* Lucide React

## Backendios

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* pdf-parse
* Zod
* Google Gemini AI (`@google/genai`)
* Nodemailer

---

# 📁 Project Structure

```text
SkillSync-AI
│
├── Backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   └── app.js
│   ├── server.js
│   └── package.json
│
└── Frontend
    ├── public
    ├── src
    │   ├── assets
    │   ├── components
    │   ├── hooks
    │   ├── pages
    │   ├── services
    │   ├── App.jsx
    │   ├── app.routes.jsx
    │   └── main.jsx
    └── package.json
```

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone https://github.com/your-username/SkillSync-AI.git

cd SkillSync-AI
```

---

## 2. Install Backend Dependencies

```bash
cd Backend

npm install
```

---

## 3. Install Frontend Dependencies

```bash
cd ../Frontend

npm install
```

---

# 🔑 Environment Variables

## Backend (`Backend/.env`)

```env
PORT=8000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GOOGLE_GENAI_API_KEY=your_google_gemini_api_key

EMAIL_USER=your_email

EMAIL_PASS=your_email_app_password

CLIENT_URL=http://localhost:5173
```

---

## Frontend (`Frontend/.env`)

```env
VITE_API_URL=http://localhost:8000/api
```

---

# ▶️ Running the Project

## Start Backend

```bash
cd Backend

npm start
```

Backend runs on:

```text
http://localhost:5000
```

---

## Start Frontend

```bash
cd Frontend

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint               | Description      |
| ------ | ---------------------- | ---------------- |
| POST   | `/api/auth/register`   | Register user    |
| POST   | `/api/auth/verify-otp` | Verify OTP       |
| POST   | `/api/auth/login`      | Login            |
| POST   | `/api/auth/logout`     | Logout           |
| GET    | `/api/auth/get-me`     | Get current user |

---

## Reports

| Method | Endpoint                     | Description                        |
| ------ | -----------------------------| ---------------------------------- |
| POST   | `/api/ai-report/`            | Upload resume & generate AI report |
| GET    | `/api/ai-report/reports`     | Get all reports                    |
| GET    | `/api/ai-report/:reportID`   | Get report by ID                   |

---

# 📄 Resume Upload

`POST /api/ai-report/

Content-Type:

```text
multipart/form-data
```

Required fields:

| Field           | Type     |
| --------------- | -------- |
| resume          | PDF File |
| selfDescription | Text     |
| jobDescription  | Text     |

---

# 🗄 Database Models

## User

* username
* email
* password

---

## OTP

* username
* email
* password
* otp
* expiresAt

---

## Blacklisted Token

* token
* createdAt

---

## Report

* title
* resume
* jobDescription
* selfDescription
* matchScore
* technicalQuestions
* behavioralQuestions
* skillGap
* preparationPlan
* user
* createdAt
* updatedAt

---

# 🧠 AI Workflow

```
Upload Resume
      │
      ▼
Extract PDF Text
      │
      ▼
Combine Resume + Self Description + Job Description
      │
      ▼
Google Gemini AI
      │
      ▼
Validate Response using Zod
      │
      ▼
Store Report in MongoDB
      │
      ▼
Display Interactive Dashboard
```

---


# 👨‍💻 Author

**Tejas Khurd**

GitHub: https://github.com/tejas-khurd-dev

Portfolio: https://tejas-khurd.vercel.app

---

# 📄 License

This project is licensed under the MIT License.
