import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SignupForm from "./forms/SignupForm";
import LoginForm from "./forms/LoginForm";
import SongsPage from "./components/SongsPage";
import NewSongForm from "./forms/NewSongForm";
import NewRewriteForm from "./forms/NewRewriteForm";
import Song from "./components/Song";
import Rewrite from "./components/Rewrite";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState({
    username: "",
    name: ""
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetch("/me").then((u) => {
      if (u.ok) {
        u.json().then((newU) => {
          setLoggedIn(true);
          setUser(newU);
          console.log("user:", newU);
        });
        // }else{
        //   setError(u.error)
      }
    });
  }, []);

  const loginUser = (u) => {
    console.log("this function is being called");
    setLoggedIn(true);
    setUser(u);
    history.push("/");
  };

  const logoutUser = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setLoggedIn(false);
      setUser({});
    });
    history.push("/");
  };

  const deleteAccount = () => {
    fetch("/me", {
      method: "DELETE",
    }).then(() => {
      setLoggedIn(false);
      setUser({});
    });
    history.push("/");
  };

  return (
    <div>
      <NavBar
        user={user}
        loggedIn={loggedIn}
        loggedOut={logoutUser}
        deleteAccount={deleteAccount}
      />
      <br/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/signup"
          render={(routerProps) => (
            <SignupForm {...routerProps} onLogin={loginUser} />
          )}
        />
        <Route
          exact
          path="/login"
          render={(routerProps) => (
            <LoginForm {...routerProps} onLogin={loginUser} />
          )}
        />
        {/* <Route exact path="/songs/new" component={NewSongForm} /> */}
        <Route
          path={`/songs/:song_id/rewrites/:id`}
          render={(routerProps) => <Rewrite {...routerProps} user={user} />}
        />
        <Route
          path={`/rewrites/:id`}
          render={(routerProps) => <Rewrite {...routerProps} user={user} />}
        />
        {/* SEND TO REWRITES#INDEX */}
        <Route
          path={`/songs/:song_id/rewrites`}
          render={(routerProps) => (
            <Song {...routerProps} loggedIn={loggedIn} />
          )}
        />
        <Route
          exact
          path="/songs"
          render={(routerProps) => (
            <SongsPage {...routerProps} loggedIn={loggedIn} />
          )}
        />
        {/* <Route exact path="/songs/:song_id/rewrites/new" component={NewRewriteForm} /> */}
        {/* USERS REWRITES */}
        <Route exact path="/rewrites" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
