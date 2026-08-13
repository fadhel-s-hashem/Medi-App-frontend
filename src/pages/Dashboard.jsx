import { useState } from "react";
import { useEffect } from "react";
// import { index } from "../services/userService";
import * as userService from '../services/userService'


const Dashboard = (props) => {

     const [users, setUsers] = useState([])
     const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await userService.index()
        setUsers(fetchedUsers)
      } catch (err) {
        setMessage(err.message)
      }
    }
    fetchUsers()
  }, [])

    return(
        <section className="centerText">
            <h1 >Welcome, <span className="blue">{props.user.username}</span></h1>

            <p className="error">{message}</p>
            
        </section>
    )
}

export default Dashboard