import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router'
import { useParams } from 'react-router'
import { Link } from 'react-router'

const NewApp = (props) => {

    const navigate = useNavigate()

    const initialState = {
    patient: '',
    timeSlot: "" ,
    status: 'scheduled',
    notes: '',
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


 
    return(

        <main>
            <h2>New Appointment </h2>

            <form >
        <label>Select Patient</label>
        <select
          required
          name="patient"
          value={formData.patient}
          onChange={handleChange}
        >
          <option value=""> Patients </option>
          {props.patients &&
            props.patients.map((patient) => (
              <option key={patient._id} value={patient._id}>
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
         
        new app page
        </main>

    )
}

export default NewApp