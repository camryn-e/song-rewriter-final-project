import { useState } from "react";

const SignupForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: password_confirmation,
        name: name,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.error) {
          setError(user.error);
        } else {
          console.log(user);
          onLogin(user);
        }
      });
  };

  return (
    <div class="form">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            id="username"
            value={username}
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            id="password_confirmation"
            value={password_confirmation}
            placeholder="Confirm Password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </label>
        <br />
        <button type="submit">Sign Up!</button>
      </form>
      <h3>{error}</h3>
    </div>
  );
};

export default SignupForm;
