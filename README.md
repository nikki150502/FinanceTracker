# Personal Finance Tracker (MERN Stack)

A full-stack personal finance tracker application built with the MERN stack (MongoDB, Express, React, Node.js). This app allows users to manage their income and expenses by creating, reading, updating, and deleting financial transactions.

---

## Features

- **CRUD Operations**: Create, Read, Update, and Delete transactions.
- **Transaction Fields**: Title, Amount (positive for income, negative for expenses), Date, Category.
- **Responsive UI**: Clean and modern interface built with React.
- **RESTful API**: Backend API built with Express and MongoDB.
- **Routing**: Frontend routes for dashboard, add, edit, and delete transactions.
- **Confirmation Dialog**: Prevent accidental deletions with confirmation prompts.
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility.
- **Real-time Summary**: Displays total income, expenses, and balance.

---

## Technologies Used

- **Frontend**: React, React Router, Axios, Tailwind CSS (or custom CSS)
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
 

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

---

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/finance-tracker.git
cd finance-tracker
```
### 2. Setup Backend
```bash
cd backend
```

- Create a .env file in the backend folder with the following content:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/finance-tracker

Replace MONGODB_URI with your MongoDB connection string if using a cloud database.

-  Start the backend server:
```bash
npm install
```

### 3.Setup frontend
```bash
cd frontend
npm install
```

## start frontend
```bash
npm start
```
### Dashboard 
<img width="2547" height="1333" alt="Screenshot 2025-09-11 102243" src="https://github.com/user-attachments/assets/2b62e8db-2366-47df-ad47-20f7c155d16a" />

### Form
<img width="2539" height="1342" alt="Screenshot 2025-09-11 102256" src="https://github.com/user-attachments/assets/ac75de4b-595a-4383-8988-3a7a6d2836b4" />

### Responsive

<img width="2559" height="1335" alt="Screenshot 2025-09-11 102321" src="https://github.com/user-attachments/assets/6099cf06-cf27-44b7-ad74-9048d8191b07" />

