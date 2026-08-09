import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Link } from 'react-router'
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (evt) => {
    evt.preventDefault()
    await props.handleAddPatient(formData)
    setFormData(initialState)
  }


    return(
        <main>
        <section className=''>
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
                { console.log(patient._id)}
                <Link to={`/patients/${patient._id}`}>
                <h3>👤{patient.username} 🪪{patient.CPR} </h3>
                <button onClick={() =>                                  props.handleDeletePatient(patient._id)}
                    >Delete</button>
                    <hr />
                    </Link>
                </>
            ))}
        </section>
        </main>
    )
}

export default PatientList