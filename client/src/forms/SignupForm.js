import { useEffect, useState } from 'react';

const SignupForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation,
                name: name
            })
        })
        .then(res => res.json())
        .then(newUser => {
            if(newUser.error){
                setError(newUser.error)
            }else{
                onLogin(newUser)
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
                <br/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <br/>
                <label for="password_confirmation">Confirm Password:</label>
                <input type="password" id="password_confirmation" name="password_confirmation" value={password_confirmation} onChange={e => setPasswordConfirmation(e.target.value)}/>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)}/>
                <br/>
                <button type="submit">Sign Up!</button>
            </form>
        </div>
    )
}

export default SignupForm;