import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home'
import NavBar from './components/NavBar';
import SignupForm from './forms/SignupForm';
import LoginForm from './forms/LoginForm';
import SongsPage from './components/SongsPage';
import NewSongForm from './forms/NewSongForm';

function App() {

  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const history = useHistory();


  useEffect(() => {
    fetch('/me')
    .then(u => {
      if(u.ok){
        u.json()
        .then(newU => {
          setLoggedIn(true)
          setUser(newU)
        })
      }
    })
  }, [])

  const loginUser = (u) => {
    console.log("this function is being called")
    setLoggedIn(true)
    setUser(u)
    history.push('/')
  }

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(() => {
      setLoggedIn(false)
      setUser({})
    })
    history.push('/')
  }

  return (
    <div>
      <Router>
      <NavBar user={user} loggedIn={loggedIn} loggedOut={logoutUser}/>
        <div>
          <Route path="/" component={Home}/>
          <Route exact path="/signup" render={routerProps => <SignupForm {...routerProps} onLogin={loginUser}/>}/>
          <Route exact path="/login" render={routerProps => <LoginForm {...routerProps} onLogin={loginUser}/>}/>
          <Route exact path="/add-song" component={NewSongForm}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
