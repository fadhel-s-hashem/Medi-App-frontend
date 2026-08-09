import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router'
import { useParams } from 'react-router'

const Scheduels = (props) => {

    return(

        <main>
            
            {props.scheduels.map((scheduel) => (
                <>
                <p>{scheduel.doctorName} : {scheduel.specialty}</p>
                <p> {scheduel.shiftStart}-{scheduel.shiftEnd}</p>
                <hr />
                </>
            ))}

        </main>
    )
}

export default Scheduels