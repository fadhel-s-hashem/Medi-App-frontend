import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router'
import { useParams } from 'react-router'

const NewScheduel= (props) => {
    const navigate = useNavigate()

    const initialState = {
    doctorName: '',
    specialty: '',
    date: '',
    shiftStart: '',
    shiftEnd: '',
  }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    await props.handleAddScheduel(formData)
    setFormData(initialState)
     navigate('/schedules')
  }

    return(
        <main>
           
      <h2>Create Doctor Schedule</h2>
      <form onSubmit={handleSubmit} >
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