import { useEffect, useState } from "react";
import RewriteLink from "../links/RewriteLink";

const Profile = () => {
    
    const [user, setUser] = useState({
        username: '',
        name: '',
        rewrites: []
    })

    const [error, setError] = useState('')

    useEffect(() => {
        fetch(`/me`)
        .then(res => res.json())
        .then(userData => {
            if(userData.error){
                setError(userData.error)
            }else{
                setUser(userData)
            }
        })
    }, [])

    if(error === ''){
        const rewriteList = user.rewrites.map(r => <RewriteLink key={r.id} rewrite={r}/>)

        return (
            <div>
                <h2>{user.name}</h2>
                <ul>
                    {rewriteList}
                </ul>
            </div>
        )
    } else {
        console.log("error", user.error)
        return(
            <h3>Unauthorized. Please Sign Up or Log In!</h3>
            // <h3>{user.error}</h3>
        )
    }
}

export default Profile