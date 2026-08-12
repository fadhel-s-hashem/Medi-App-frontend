const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`

const create = async (scheduleId, AppFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/schedules/${scheduleId}/appointments`, {
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