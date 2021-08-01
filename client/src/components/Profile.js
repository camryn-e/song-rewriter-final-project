import { useEffect, useState } from "react";
import MyRewriteLink from "../links/RewriteLink";

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

    const deleteRewrite = (rewrite) => {
        fetch(`/songs/${rewrite.song_id}/rewrites/${rewrite.id}`,{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
          })
          .then(() => {
            const currentRewrites = user.rewrites.filter(e => e.id !== rewrite.id)
            console.log("curr rewrites", currentRewrites)
            setUser({
                ...user,
                rewrites: currentRewrites
            })
          })
    }

    if(error === ''){
        const rewriteList = user.rewrites.map(r => <MyRewriteLink key={r.id} rewrite={r} deleteRewrite={deleteRewrite}/>)

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