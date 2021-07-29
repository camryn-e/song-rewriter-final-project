import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
    if(props.loggedIn){
        return (
            <div>
                <h1>Hello {props.user.username}</h1>
               <NavLink to='/add-song'>
                   <button>Add A Song</button>
                </NavLink>
               <NavLink to='/add-rewrite'>
                   <button>Add A Rewrite</button>
                </NavLink>
               <NavLink to='/songs'>
                   <button>All Songs</button>
                </NavLink>
               <NavLink to='/rewrites'>
                   <button>Your Rewrites</button>
                </NavLink>
                <button onClick={props.loggedOut}>Log Out</button>
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