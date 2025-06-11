# 🧠 NeuroFlex - Brain Health & Wellness Platform

NeuroFlex is a full-stack web application designed to support cognitive health by offering progress tracking, leaderboard rankings, and professional consultations.

---

## 📁 Project Structure

```

NeuroFlex/
├── Client/        # Frontend - React + Vite + Tailwind CSS
├── Server/        # Backend - Node.js + Express + MongoDB
└── README.md

````

---

## 🚀 Getting Started

Follow the steps below to run the project locally:

### 🔧 Prerequisites

- Node.js (v18+)
- MongoDB (local or cloud like MongoDB Atlas)
- Git

---

## 🖥️ Running the Project

### 1. Clone the Repository

```bash
git clone https://github.com/maithilighodmare/NeuroFlex-Website.git
cd NeuroFlex-Website
````

---

### 2. Setup Backend (Server)

```bash
cd Server
npm install
```

> ✏️ Create a `.env` file inside the `Server` directory with the following:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

```bash
npm start
```

The backend will run at: **[http://localhost:5000](http://localhost:5000)**

---

### 3. Setup Frontend (Client)

Open a **new terminal** and run:

```bash
cd Client
npm install
npm run dev
```

The frontend will run at: **[http://localhost:5173](http://localhost:5173)**

---

## ✅ Features

* 🧑 User Authentication & Signup
* 📊 Progress Tracking with Charts
* 🧑‍⚕️ Doctor Dashboard & Management
* 🥇 Patient Leaderboard
* 📄 Health Reports & Feedback
* 📞 Contact & FAQ Section



## 📦 Tech Stack

* **Frontend:** React, Vite, Tailwind CSS
* **Backend:** Node.js, Express
* **Database:** MongoDB
* **Authentication:** JWT
* **Deployment (optional):** Netlify, Render, or Vercel



## 📬 Contact

Made with ❤️ by Team NeuroFlex
[GitHub](https://github.com/maithilighodmare)


