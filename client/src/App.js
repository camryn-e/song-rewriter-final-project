import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import Home from './components/Home'
import NavBar from './components/NavBar';
import SignupForm from './forms/SignupForm';
import LoginForm from './forms/LoginForm';
import SongsPage from './components/SongsPage';
import NewSongForm from './forms/NewSongForm';
import NewRewriteForm from './forms/NewRewriteForm';
import Song from './components/Song';
import Rewrite from './components/Rewrite';
import Profile from './components/Profile'

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
          console.log('user:', newU)
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
      <NavBar user={user} loggedIn={loggedIn} loggedOut={logoutUser}/>
      <Switch>
        <div>
          <Route path="/" component={Home}/>
          <Route exact path="/signup" render={routerProps => <SignupForm {...routerProps} onLogin={loginUser}/>}/>
          <Route exact path="/login" render={routerProps => <LoginForm {...routerProps} onLogin={loginUser}/>}/>
          <Route exact path="/add-song" component={NewSongForm}/>
          <Route path="/songs/:song_id/rewrites/:id" component={Rewrite}/>
          <Route path="/songs/:id" component={Song}/>
          <Route exact path="/songs" component={SongsPage}/>
          <Route exact path="/add-rewrite" component={NewRewriteForm}/>
          <Route exact path="/profile" render={routerProps => <Profile {...routerProps} user={user}/>}/>
        </div>
      </Switch>
    </div>
  );
}

export default App;