import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
    if(props.loggedIn){
        return (
            <div>
                <h1>Hello {props.user.username}</h1>
               <NavLink to='/songs'>
                   <button>All Songs</button>
                </NavLink>
               <NavLink to='/profile'>
                   <button>Profile</button>
                </NavLink>
                <button onClick={props.loggedOut}>Log Out</button>
                <button onClick={props.deleteAccount}>Delete Account</button>
            </div>
        )
    } else {
        return (
            <div>
               <NavLink to='/songs'>
                   <button>All Songs</button>
                </NavLink>
               <NavLink to='/signup'>
                   <button>Sign Up</button>
                </NavLink>
                <NavLink to='/login'>
                    <button>Login!</button>
                </NavLink>
            </div>
        )
    }
}

export default NavBar