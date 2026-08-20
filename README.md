# MediApp

MediApp is a robust, full-stack healthcare platform built with the MERN stack (MongoDB, Express, React, Node.js). This application enables medical facilities to digitally manage doctor shift schedules, log patient profiles, book real-time appointments across 24-hour time slots, and maintain reference documentation for diagnostic procedures.

MediApp Screenshot<img width="1920" height="854" alt="Screenshot 2026-08-20 162948" src="https://github.com/user-attachments/assets/390d2230-5f10-4937-b6bf-1de8918695d4" />

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
## Frontend
### 1. download this Repository or clone it
[Medi-App-frontend](https://github.com/fadhel-s-hashem/Medi-App-frontend)
```bash
git clone https://github.com/fadhel-s-hashem/Medi-App-frontend
```

### 2.Navigate to the directory and install dependencies
```
cd Medi-App-frontend
npm install
```

### 3. Environment configuration
Create a `.env` file in the `Medi-App-frontend` directory
```
VITE_BACK_END_SERVER_URL=http://localhost:3000
```

### 4. Start the React development server
```
npm run dev
```
---
## Backend
### 1. Clone the repository of back end
[Mwdi-App-backend]([https://github.com/YourUsername/MediApp.git](https://github.com/fadhel-s-hashem/Medi-App-backend)](https://github.com/fadhel-s-hashem/Medi-App-backend))
```bash
git clone https://github.com/fadhel-s-hashem/Medi-App-backend
```

### 2.Navigate 
```
# Navigate to the backend directory
cd Medi-App-backend

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

* Create delete schedule button 
* add an show, update , and delete options for appointment
* Medical imaging reference guide integration for diagnostic technicians.
* Role-based access control (Admin, Doctor, Receptionist).

---

## Credits

his project would've not been possible without the help and support of my instructor in GA, Ms. Nabila and the Instructor Associates, Ms. Zainab and Ms. Bidoor.
