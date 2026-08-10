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
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f6f8' }}>
      <h2 style={{ marginBottom: '20px', color: '#1e293b' }}>Daily Doctor Schedules</h2>

      {/* Main horizontal container for doctors */}
      <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '10px' }}>
        {mockSchedules.map((doc) => (
          <div
            key={doc.id}
            style={{
              width: '320px',
              backgroundColor: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              flexShrink: 0,
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
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
                  width: '48px',
                  height: '48px',
                  borderRadius: '4px',
                  backgroundColor: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '18px',
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
                    <div
                      style={{
                        width: '60px',
                        padding: '6px',
                        backgroundColor: '#f8fafc',
                        borderRight: '1px solid #e2e8f0',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#475569',
                        textAlign: 'center',
                      }}
                    >
                      {time}
                    </div>

                    {/* Patient Cards Container */}
                    <div style={{ flex: 1, padding: '2px 4px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      {slotAppointments.map((patient, idx) => (
                        <div
                          key={idx}
                          style={{
                            backgroundColor: '#38bdf8',
                            color: '#0f172a',
                            padding: '3px 6px',
                            borderRadius: '3px',
                            fontSize: '11px',
                            fontWeight: 'bold',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            border: '1px solid #0284c7',
                          }}
                        >
                          <span>{patient.name}</span>
                          <span style={{ fontSize: '10px', opacity: 0.8 }}>CPR: {patient.cpr}</span>
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