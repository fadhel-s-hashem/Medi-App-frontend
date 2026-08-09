import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router'
import { useParams } from 'react-router'
import * as patientService from '../services/patients'


const PatientRedetail = (props)=> {
    const navigate = useNavigate()
  const { patientId } = useParams()

    const [patient, setPatient] = useState(null)


    
useEffect(() => {
        const fetchpatient = async (patientId) => {
            const patientData = await patientService.show(patientId)
            setPatient(patientData)
        }
        fetchpatient(patientId)
    }, [patientId])


    if (!patient) return <main><div className="loader"></div></main>
    return(
        <main>
            
            <h2>{patient.CPR}</h2>

        </main>

    )
} 

export default PatientRedetail