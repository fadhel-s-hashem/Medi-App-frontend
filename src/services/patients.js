const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/patients`

const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })

    return res.json()
    } catch (error) {
         console.log(error)
    }
}

const create = async (PatientFormData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(PatientFormData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deletePatient = async (patientId) => {
  try {
    const res = await fetch(`${BASE_URL}/${patientId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    return res.json()
  } catch (error) {
    console.error('Error deleting patient:', error)
  }
}

const show = async (patientId) => {
  try {
    const res = await fetch(`${BASE_URL}/${patientId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  create,
  deletePatient,
  show,

}