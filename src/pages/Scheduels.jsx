import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router'
import { useParams } from 'react-router'
import { Link } from 'react-router'

const Scheduels = (props) => {

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
   

    return(

        

        <main>


      <h2>Doctor Schedules</h2>

  {/* Main horizontal container for doctors */}
  <div className="schedule-container">
    {props.scheduels && props.scheduels.map((scheduel) => (
      <div key={scheduel._id || scheduel.id} className="doctor-card">
        {/* Top Doctor Profile Header */}
        <div className="doctorCard">
          <div className="doctorImage">👨‍⚕️</div>
          <div className="doctor-details">
            <div className="doctor-info">{scheduel.doctorName}</div>
            <div className="doctor-info">
              {scheduel.specialty} | {scheduel.shiftStart}-{scheduel.shiftEnd}
              <br />
              <Link to={`/schedules/${scheduel._id}`}><span  className='blue'>Edit</span></Link>
            </div>
          </div>
        </div>

        {/* The time containers boxes MUST be inside the map block */}
        <div className="time-division">
          {timeSlots.map((time) => {
            const slotAppointments = scheduel.appointments?.[time] || []
            return (
              <div key={time} className="time-container">
                {/* Time Label Column */}
                <button className="time-button">{time}</button>

                {/* Patient Cards Container */}
                <div className="patient-card-container">
                  {slotAppointments.map((patient, idx) => (
                    <div key={idx} className="patient-card">
                      <span>{patient.name || patient.username}</span>
                      <span>CPR: {patient.cpr || patient.CPR}</span>
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
            
                 
{/* 
            {props.scheduels.map((scheduel) => (
                <>
                <p>{scheduel.doctorName} : {scheduel.specialty}</p>
                <p> {scheduel.shiftStart}-{scheduel.shiftEnd}</p>
                <Link to={`/schedules/${scheduel._id}`}><button>Edit scheduel</button></Link>

                <hr />
                
                </>
            ))} */}

        </main>
    )
}

export default Scheduels