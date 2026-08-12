
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router';
import { useParams } from 'react-router';

import * as patientService from './services/patients'
import * as scheduelService from './services/schedules'
import * as appService from './services/appointments'

import './App.css'
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Nav from './components/Nav'
import PatientList from './pages/PatientList';
import PatientRedetail from './pages/PatientRedetail';
import Scheduels from './pages/Scheduels';
import NewScheduel from './pages/NewScheduel';
import EditSchedule from './pages/EditSchedule';
import DailySchedule from './pages/DailySchedule';
import ScheduleTemplate from './pages/ScheduleTemplate';
import NewApp from './pages/newApp';

const getUserFromToken = () => {
  const token = localStorage.getItem('token')
  if(!token) return null 
   return JSON.parse(atob(token.split('.')[1])).payload
 }

const App = () => {
  const navigate = useNavigate()
  const { patientId } = useParams()
  const { scheduleId } = useParams()
  
  const [user, setUser] = useState(getUserFromToken())
  const [patients, setPatients] =useState([])
  const [scheduels, setScheduels] = useState([])

  // for patient handeler ==================================
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

const handleDeletePatient = async (patientId) => {
  try {
    await patientService.deletePatient(patientId)
    
    const filteredPatients = patients.filter((patient) => {
      return patient._id !== patientId
    })
    setPatients(filteredPatients)
    navigate('/patients')
  } catch (err) {
    console.error('Error deleting patient:', err)
  }
}

const handleUpdatePatient = async (patientId, formData) => {
    console.log('patientId: ', patientId)
    console.log('formData: ', formData)
   const updatePatientinfo = await patientService.update(patientId, formData)
   const updatedPatient= patients.map((patient) => {
      return patientId === patient._id ? updatePatientinfo : patient
    })
    setPatients(updatedPatient)
  }

  // for Shedules handeler ==================================
  useEffect(() => {
    const fetchAllScheduels = async () => {
      const scheduelsData = await scheduelService.index()
      setScheduels(scheduelsData)
    }
    if (user) fetchAllScheduels()
  }, [user])

  const handleAddScheduel = async (formData) => {
  const addScheduel = await scheduelService.create(formData)
  setScheduels([...scheduels, addScheduel])
 
}

const handleUpdateSchedule = async (scheduleId, formData) => {
 
    console.log('scheduleId: ', scheduleId)
    console.log('formData: ', formData)
    const updateScheduleList = await scheduelService.update(scheduleId, formData)
    const updatedSchedules = scheduels.map((schedule) => {
      return schedule._id === scheduleId ? updateScheduleList : schedule
    })

    setScheduels(updatedSchedules)
  }

  // for appointment handler ===============================

  const handleAddAppointment = async (formData) => {
  const newAppointment = await appService.create(scheduleId, formData)
  setScheduels({...scheduels, appointments: [...scheduels.appointments, newAppointment] })
 
}
 

  return (
    <div>
      <Nav user={user} setUser={setUser}/>
      <main className="app-main">
      <Routes>

      // if there is user signed go to dashboard else to landing
      <Route path='/' element={user ? <Dashboard user={user} /> : <Landing />} />

        <Route path='/sign-up' element={<SignUpForm setUser={setUser}/>} />

        <Route path='/sign-in' element={<SignInForm setUser={setUser}/>}/>

        <Route path='/patients' element={ <PatientList patients={patients} handleAddPatient={handleAddPatient} handleDeletePatient={handleDeletePatient}/>}/>

      
        <Route path='/patients/:patientId' element={<PatientRedetail patients={patients} setPatients={setPatients} handleUpdatePatient={handleUpdatePatient}/>}/>

      
        <Route path='/schedules' element={<Scheduels scheduels={scheduels}/>}/>

        <Route path='/schedules/new' element={<NewScheduel scheduels={scheduels} handleAddScheduel={handleAddScheduel}/>}/>

        <Route path='/schedules/:scheduleId' element={<EditSchedule handleUpdateSchedule={handleUpdateSchedule}/>}/>

      
        <Route path='/schedules/:scheduleId/appointments/:time' element={<NewApp handleAddAppointment={handleAddAppointment} patients={patients}/>}/>
        
        <Route path="*" element={<h2>Page Not Found 👎</h2>} />
      </Routes>
      </main>
    </div>
  );
};

export default App

