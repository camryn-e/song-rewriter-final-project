import { useEffect, useState } from 'react';

const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
                <br/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <br/>
                <button type="submit">Log In!</button>
            </form>
        </div>
    )
}

export default LoginForm;