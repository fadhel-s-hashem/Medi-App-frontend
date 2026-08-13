import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router'
import { useParams } from 'react-router'
import * as patientService from '../services/patients'


const PatientRedetail = (props)=> {
    const navigate = useNavigate()
  const { patientId } = useParams()

    const [patient, setPatient] = useState(null)

    
    const initialState = {
   username: "" ,
   CPR: '',
   phoneNumber: '',
   gender: 'male',
   birthDate: '',
 }

 const [formData, setFormData] = useState(initialState)

 // to make form input = the added data
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const patientData = await patientService.show(patientId)
        setPatient(patientData)
        
        setFormData(patientData)
        setFormData({...patientData, birthDate: patientData.birthDate ? patientData.birthDate.split('T')[0] : ''})
      } catch (err) {
        console.error(err)
      }
    }

    if (patientId) fetchPatient()
  }, [patientId])

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    await props.handleUpdatePatient(patientId,formData)
    navigate('/patients')
  }



    if (!patient) return <main><div className="loader"></div></main>
    return(
        <main>
           <section className="patient-profile-card">
        <div className="profile-header">
          <div className="avatar-badge">
            {patient.gender === 'male' ? '🧔🏻‍♂️' : '👩🏻'}
          </div>
          <div className="profile-title">
            <h2>{patient.username}</h2>
          </div>
        </div>

        <hr/>
        <br />

        <div className="profile-grid">
          <div className="info-item">
            <span className="info-label">CPR Number</span>
            <span className="info-value highlight">{patient.CPR}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Phone Number</span>
            <span className="info-value">{patient.phoneNumber || 'N/A'}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Gender</span>
            <span className="info-value capitalize">{patient.gender}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Date of Birth</span>
            <span className="info-value">
              {patient.birthDate
                ? new Date(patient.birthDate).toLocaleDateString()
                : 'Not provided'}
            </span>
          </div>
        </div>
      </section>

          <br />
            
        <section className=''>
            <h2>Edit <span className='blue'>{patient.username}</span></h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          required
          type='text'
          name='username'
          id='username-input'
          value={formData.username}
          onChange={handleChange}
        />

        <label>CPR</label>
        <input
          required
          type='text'
          name='CPR'
          id='cpr-input'
          value={formData.CPR}
          onChange={handleChange}
        />

        <label>Phone Number</label>
        <input
          required
          type='text'
          name='phoneNumber'
          id='phone-input'
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        <label>Gender</label>
        <select
          required
          name='gender'
          id='gender-input'
          value={formData.gender}
          onChange={handleChange}
        >
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>

        <label>Birth Date</label>
        <input
          type='date'
          name='birthDate'
          id='birthdate-input'
          value={formData.birthDate}
          onChange={handleChange}
        />

        <button type='submit'>save change</button>
      </form>
        </section>

        </main>

    )
} 

export default PatientRedetail