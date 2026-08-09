import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router'
import { useParams } from 'react-router'

const NewScheduel= () => {
    const navigate = useNavigate()

    const initialState = {
    doctorName: '',
    specialty: '',
    date: '',
    shiftStart: '08:00 AM',
    shiftEnd: '4:00 PM',
  }

    const [formData, setFormData] = useState(initialState)

    const handleChange = () => {}

    return(
        <main>
           
      <h2>Create Doctor Schedule</h2>
      <form >
        <label>Doctor Name</label>
        <input
          required
          type="text"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
        />

        <label >Specialty</label>
        <input
          type="text"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
        />

        <label>Date</label>
        <input
          required
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <label>Shift Start Time</label>
        <input
          required
          type="time"
          name="shiftStart"
          value={formData.shiftStart}
          onChange={handleChange}
        />

        <label>Shift End Time</label>
        <input
          required
          type="time"
          name="shiftEnd"
          value={formData.shiftEnd}
          onChange={handleChange}
        />

        <button type="submit">CREATE SCHEDULE</button>
      </form>
        </main>
    )
}

export default NewScheduel