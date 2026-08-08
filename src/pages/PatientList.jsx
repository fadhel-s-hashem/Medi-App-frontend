import { useState } from "react";

const PatientList = (props) => {

    return(
        <main>
        <section>
            {props.patients.map((patient)=> (
                <>
                <h3>👤{patient.username} 🪪{patient.CPR} </h3>
                </>
            ))}

        </section>
        </main>
    )
}

export default PatientList