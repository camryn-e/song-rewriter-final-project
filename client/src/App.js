import './App.css';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home'
import NavBar from './components/NavBar';

function App() {

  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const history = useHistory();


  useEffect(() => {
    fetch('/me')
    .then(u => {
      if(u.isOk){
        setUser(u)
      }
    })
  })

  return (
    <div>
      <Router>
      <NavBar user={user} loggedIn={loggedIn}/>
        <div>
          <Route path="/" component={Home}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
