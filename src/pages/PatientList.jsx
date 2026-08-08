import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router'
import { useParams } from 'react-router'


const PatientList = (props) => {

    const initialState = {
    username: '',
    CPR: '',
    phoneNumber: '',
    gender: 'male',
    birthDate: '',
  }

  const [formData, setFormData] = useState(initialState)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    await props.handleAddPatient(formData)
    // navigate('/patients')
  }

    return(
        <main>
        <section>
            <h2>New Patient</h2>
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

        <button type='submit'>SUBMIT</button>
      </form>
        </section>

        <section>
            {props.patients.map((patient)=> (
                <>
                <h3>👤{patient.username} 🪪{patient.CPR} </h3>
                </>
            ))}
        </section>
        </main>
    )
}

export default PatientList