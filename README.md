# MediApp - Clinical Radiology & Schedule Management

A robust, full-stack healthcare platform built with the MERN stack (MongoDB, Express, React, Node.js). This application enables medical facilities to digitally manage doctor shift schedules, log patient profiles, book real-time appointments across 24-hour time slots, and maintain reference documentation for diagnostic procedures.

Live Demo

[Deployed Website](https://your-deployed-site.com)  

---

## Features

* **User Authentication & Authorization:** Secure sign-up and sign-in workflows utilizing JSON Web Tokens (JWT) and password hashing for healthcare personnel.
* **Doctor Schedule Management:** Visualize active doctors, shift times, and specialties with an interactive 24-hour daily timetable.
* **Real-time Appointment Booking:** Book patient appointments directly to specific time slots. Doctor schedules update seamlessly without page reloads using embedded MongoDB subdocument updates.
* **Patient Records Management:** Complete CRUD functionality for patient files (CPR numbers, contact information, gender, and birth dates) with an intuitive two-column list and edit interface.
* **Interactive UI/UX:** Built with a modern, responsive layout utilizing CSS Custom Properties, smooth horizontal scheduling grids, and responsive patient profile cards.

---

## Tech Stack

* **Frontend:** React.js (Vite), React Router v6, CSS3 (Flexbox & Grid)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose ODM
* **Authentication:** JSON Web Tokens (JWT), bcrypt

---

## Prerequisites

Before running this project locally, ensure you have the following installed:
* Node.js (v18 or higher)
* MongoDB (running locally or a MongoDB Atlas URI)

---

## Installation and Setup

This project uses a decoupled architecture with separate frontend and backend directories.

### 1. Clone the repository
```bash
git clone [https://github.com/YourUsername/MediApp.git](https://github.com/YourUsername/MediApp.git)
cd MediApp
```

### 2.Backend Setup 
```
# Navigate to the backend directory
cd backend

# Install dependencies
npm install
```
### 3. Create a .env file in the gearhead-backend directory
```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Start the backend server (development mode)
```
npm run dev
```

---

Frontend Setup

Open a new terminal window
```bash
# Navigate to the frontend directory
cd gearhead-frontend

# Install dependencies
npm install
```

Create a .env file in the gearhead-frontend directory
```
VITE_BACK_END_SERVER_URL=http://localhost:3000
```

Start the React development server
```bash
npm run dev
```

*. Access the app**

Open your browser and navigate to `http://localhost:5173`.

### Access the App
Open your browser and navigate to `http://localhost:5173`.

---

## Application Structure

### Backend (`backend/`)
* **`models/`**: Mongoose schemas for `User`, `Patient`, and `Schedule` (which includes embedded `Appointment` subdocuments referencing patient profiles).
* **`controllers/`**: API route handlers for authentication, patient management, and schedule/appointment logic.
* **`routes/`**: Express routers defining RESTful API endpoints.

### Frontend (`frontend/`)
* **`src/pages/`**: Primary views (`Scheduels.jsx`, `NewApp.jsx`, `PatientList.jsx`, `PatientRedetail.jsx`).
* **`src/services/`**: Fetch API modules (`schedules.js`, `appointments.js`, `patients.js`) to communicate securely with the Express backend.
* **`src/index.css`**: Centralized stylesheet using custom variables, flexbox grid layouts, and styled medical cards.

---

## Future Enhancements

* Automatic SMS/Email appointment reminders for registered patients.
* Export patient appointment histories and daily doctor schedules to PDF.
* Medical imaging reference guide integration for diagnostic technicians.
* Role-based access control (Admin, Doctor, Receptionist).

---

## Credits

his project would've not been possible without the help and support of my instructor in GA, Ms. Nabila and the Instructor Associates, Ms. Zainab and Ms. Bidoor.
