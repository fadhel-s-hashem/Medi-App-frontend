const ScheduleTemplate = () => {
  const generate24HourSlots = () => {
    const timeSlots = []

    for (let hour = 0; hour < 24; hour++) {
      // Format hour with leading zero (e.g. 8 -> '08')
      const formattedHour = String(hour).padStart(2, '0')

      // Add :00 and :30 intervals
      timeSlots.push(`${formattedHour}:00`)
      timeSlots.push(`${formattedHour}:30`)
    }

    return timeSlots
  }

  const timeSlots = generate24HourSlots()
  const mockSchedules = [
    {
      id: 1,
      doctorName: 'Dr. ZAINAB RABEA',
      specialty: 'PreEmployment',
      shift: '9AM - 3PM',
      appointments: {
        '09:00': [
          { name: 'AMRITPAL SINGH', cpr: '92102931' },
          { name: 'SHAHZAD GOHAR', cpr: '88012932' },
          { name: 'FARMAN ALI', cpr: '95110293' },
          { name: 'HANANI ABAGISA', cpr: '91039201' },
          { name: 'NARESH SATHALLA', cpr: '85039201' },
          { name: 'MUHAMMAD AWAIS', cpr: '94039281' },
        ],
        '09:15': [{ name: 'MUHAMMAD AFZAL', cpr: '89029301' }],
        '09:30': [{ name: 'ASAD RAHMAN', cpr: '97039210' }],
        '10:00': [{ name: 'ANURADHA RAUDU', cpr: '93029102' }],
      },
    },
    {
      id: 2,
      doctorName: 'Dr. HUSAIN ALJUFAIRI',
      specialty: 'Radiology',
      shift: '8AM - 4PM',
      appointments: {},
    },
  ]

  return (
    <div className="template-card">
      <h2>Daily Doctor Schedules</h2>

      {/* Main horizontal container for doctors */}
      <div className="schedule-container">
        {mockSchedules.map((doc) => (
          <div key={doc.id} className="doctor-card">
            {/* Top Doctor Profile Header */}
            <div className="doctor-outer-profile">
              <div className="doctor-inner-profile">👨‍⚕️</div>
              <div className="doctor-details">
                <div className="doctor-info">{doc.doctorName}</div>
                <div className="doctor-info">
                  {doc.specialty} | {doc.shift}
                </div>
              </div>
            </div>

            {/* Time Slot List */}
            <div className="time-division">
              {timeSlots.map((time) => {
                const slotAppointments = doc.appointments[time] || []
                return (
                  <div key={time} className="time-container">
                    {/* Time Label Column */}
                    <button className="time-button">{time}</button>

                    {/* Patient Cards Container */}
                    <div className="patient-card-container">
                      {slotAppointments.map((patient, idx) => (
                        <div key={idx} className="patient-card">
                          <span>{patient.name}</span>
                          <span>CPR: {patient.cpr}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScheduleTemplate