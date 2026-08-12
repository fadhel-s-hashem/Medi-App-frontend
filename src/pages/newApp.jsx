import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router'
import { useParams } from 'react-router'
import { Link } from 'react-router'

const NewApp = (props) => {

    const navigate = useNavigate()
    const { scheduleId, time } = useParams()

    const initialState = {
    patient: '',
    timeSlot: time ,
    status: 'scheduled',
    notes: '',
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await props.handleAddAppointment(scheduleId, formData)
    navigate('/schedules')
  }


 
    return(

        <main>
            <h2>New Appointment at ({formData.timeSlot})</h2>

            <form onSubmit={handleSubmit}>
        <label>Select Patient</label>
        <select
          required
          name="patient"
          value={formData.patient}
          onChange={handleChange}
        >
          {/* <option value="">  </option> */}
          {
            props.patients.map((patient) => (
              <option value={patient._id}>
                {patient.username} (CPR: {patient.CPR})
              </option>
            ))}
        </select>

        <label>Time Slot</label>
        <input
          required
          type="text"
          name="timeSlot"
          value={formData.timeSlot}
          onChange={handleChange}
        />

        <label>Notes</label>
        <input
          type="text"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />

        <button type="submit">CREATE APPOINTMENT</button>
      </form>
         
        </main>

    )
}

export default NewApp