const ScheduleTemplate = () => {
  // Static mock data strictly for visual template preview
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
    <div style={{ padding: '20px', backgroundColor: '#f4f6f8' }}>
      <h2 >Daily Doctor Schedules</h2>

      {/* Main horizontal container for doctors */}
      <div style={{ display: 'flex', gap: '5dvh', overflowX: 'auto', paddingBottom: '10px' }}>
        {mockSchedules.map((doc) => (
          <div
            key={doc.id}
            style={{
              width: '75dvh',
              backgroundColor: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              flexShrink: 0,
            }}
          >
            {/* Top Doctor Profile Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                backgroundColor: '#e2e8f0',
                borderBottom: '1px solid #cbd5e1',
                borderTopLeftRadius: '5px',
                borderTopRightRadius: '5px',
              }}
            >
              <div
                style={{
                  width: '11dvh',
                  height: '11dvh',
                  backgroundColor: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '5dvh',
                }}
              >
                👨‍⚕️
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#0f172a' }}>
                  {doc.doctorName}
                </div>
                <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>
                  {doc.specialty} | {doc.shift}
                </div>
              </div>
            </div>

            {/* Time Slot List */}
            <div style={{ maxHeight: '550px', overflowY: 'auto' }}>
              {timeSlots.map((time) => {
                const slotAppointments = doc.appointments[time] || []

                return (
                  <div
                    key={time}
                    style={{
                      display: 'flex',
                      borderBottom: '1px solid #e2e8f0',
                      minHeight: '36px',
                    }}
                  >
                    {/* Time Label Column */}
                    <button
                      style={{
                        width: '15dvh',
                        padding: '2dvh',
                        backgroundColor: '#f8fafc',
                        borderRight: 'solid #5e6165',
                        borderRadius: '0dvh',
                        color: '#3d444e',
                        
                      }}
                    >
                      {time}
                    </button>

                    {/* Patient Cards Container */}
                    <div style={{ flex: 1, padding: '1dvh', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      {slotAppointments.map((patient, idx) => (
                        <div
                          key={idx}
                          style={{
                            backgroundColor: '#38bdf8',
                            color: 'black',
                            padding: '0.7dvh',
                            borderRadius: '1dvh',
                            fontSize: '11px',
                            fontWeight: 'bold',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            border: '0.4dvh solid #0284c7',
                          }}
                        >
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