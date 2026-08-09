import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router'
import { useParams } from 'react-router'
import { Link } from 'react-router'

const Scheduels = (props) => {

    return(

        <main>
            
            {props.scheduels.map((scheduel) => (
                <>
                <p>{scheduel.doctorName} : {scheduel.specialty}</p>
                <p> {scheduel.shiftStart}-{scheduel.shiftEnd}</p>
                <Link to={`/schedules/${scheduel._id}`}><button>Edit scheduel</button></Link>

                <hr />
                
                </>
            ))}

        </main>
    )
}

export default Scheduels