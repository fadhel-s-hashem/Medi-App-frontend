import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import * as scheduleService from '../services/schedules'

const EditSchedule = (props) => {

    const navigate = useNavigate()
  const { scheduleId } = useParams()

  const initialState = {
    doctorName:'',
    specialty: '',
    date: '',
    shiftStart:  '',
    shiftEnd: '',
  }

  const [formData, setFormData] = useState(initialState)

  // to make form input = the added data
  useEffect(() => {
      const fetchschedule = async () => {
       const scheduleData = await scheduleService.show(scheduleId)
       setFormData(scheduleData)
      }
      if (scheduleId) fetchschedule()
        return () => setFormData(initialState)
    } , [scheduleId])


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()      
     await props.handleUpdateSchedule(scheduleId, formData)
      navigate('/schedules')
  }

    return(
        <main>
      <h2>Edit Doctor </h2>
      <form onSubmit={handleSubmit}>
        <label>Doctor Name</label>
        <input
          required
          type="text"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
        />

        <label>Specialty</label>
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

        <button type="submit">SAVE CHANGES</button>
      </form>
    </main>
    )
}


export default EditSchedule
