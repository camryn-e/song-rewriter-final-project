import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  if (props.loggedIn) {
    return (
      <div>
          <div class="nav">
              {/* <h1>Hello {props.user.username}</h1> */}
          <NavLink to="/songs">
            All Songs
          </NavLink>
          <NavLink to="/rewrites">
            My Rewrites
          </NavLink>
          </div>
        <div class="bottom-nav">
            <button onClick={props.loggedOut}>Log Out</button>
            <button onClick={props.deleteAccount}>Delete Account</button>
        </div>
      </div>
    );
  } else {
    return (
      <div class="nav">
        <NavLink to="/songs">
          All Songs
        </NavLink>
        <NavLink to="/signup">
          Sign Up
        </NavLink>
        <NavLink to="/login">
          Login!
        </NavLink>
      </div>
    );
  }
};

export default NavBar;
