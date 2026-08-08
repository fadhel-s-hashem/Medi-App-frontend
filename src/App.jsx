
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router';

import * as patientService from './services/patients'

import './App.css'
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Nav from './components/Nav'
import PatientList from './pages/PatientList';

const getUserFromToken = () => {
  const token = localStorage.getItem('token')
  if(!token) return null 
   return JSON.parse(atob(token.split('.')[1])).payload
 }

const App = () => {
  const navigate = useNavigate
  
  const [user, setUser] = useState(getUserFromToken())
  const [patients, setPatients] =useState([])

  useEffect(() => {
  const fetchAllPatients = async () => {
    try {
      const patientsData = await patientService.index()
      setPatients(patientsData)
    } catch (err) {
      console.error('Error fetching patients:', err)
    }
  }

  if (user) fetchAllPatients()
}, [user])

const handleAddPatient = async (formData) => {
  const newPatient = await patientService.create(formData)
  setPatients([...patients, newPatient])
}
 

  return (
    <div>
      <Nav user={user} setUser={setUser}/>
      
    <PatientList patients={patients} handleAddPatient={handleAddPatient}/>
      <main className="app-main">
      <Routes>

      // in there is user signed go to dashboard else to landing
      <Route path='/' element={user ? <Dashboard user={user} /> : <Landing />} />

        <Route path='/sign-up' element={<SignUpForm setUser={setUser}/>} />

        <Route path='/sign-in' element={<SignInForm setUser={setUser}/>}/>
      </Routes>
      </main>
    </div>
  );
};

export default App

