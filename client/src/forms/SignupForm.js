import { useEffect, useState } from 'react';

const SignupForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')

    return (
        <div>
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
                <br/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <br/>
                <label for="password_confirmation">Confirm Password:</label>
                <input type="password" id="password_confirmation" name="password_confirmation" value={password_confirmation} onChange={e => setPasswordConfirmation(e.target.value)}/>
                <button type="submit">Sign Up!</button>
            </form>
        </div>
    )
}

export default SignupForm;