const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/appointments`

const create = async (AppFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/new`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(AppFormData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

 export {
    create,

  }