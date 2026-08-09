// src/components/Nav.jsx
import { Link } from "react-router"



const Nav = (props) => {

    const handleSignOut = () => {
        localStorage.removeItem('token')
        props.setUser(null)
    }

  return (
        <nav>
            { props.user ? (
                <>
                    <li>Welcome, <span className="blue">{props.user.username}</span></li>
                <ul>
                    <li><Link className="nav-brand" to="/">Home</Link></li>
                    <li><Link to="/patients">patients</Link></li>
                    <li><Link to='/' onClick={handleSignOut}>Sign Out</Link></li>
                </ul>
                </>
            ) : (
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/sign-up'>Sign Up</Link>
                </li>
                <li>
                    <Link to="/sign-in">Sign in</Link>
                </li>
            </ul>
            ) }

        </nav>
    )

}

export default Nav

