import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
    if(props.loggedIn){
        return (
            <div>
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
               <NavLink to='/logout'>
                   <button>Log Out</button>
                </NavLink>
            </div>
        )     
    }
}

export default NavBar