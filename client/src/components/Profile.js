import { useEffect, useState } from "react";
import RewriteLink from "../links/RewriteLink";

const Profile = (props) => {
    
    // const [rewrite, setRewrite] = useState({
    //     username: '',
    //     name: '',
    //     rewrites: []
    // })

    // useEffect(() => {
    //     fetch(`/songs/${props.match.params.song_id}/rewrites/${props.match.params.id}`)
    //     .then(res => res.json())
    //     .then(rewriteData => {
    //         setRewrite(rewriteData)
    //     })
    // }, [props.match.params.id])
    if(props.loggedIn){
        const rewriteList = props.user.rewrites.map(r => <RewriteLink key={r.id} rewrite={r}/>)

        return (
            <div>
                <h2>{props.user.name}</h2>
                <ul>
                    {rewriteList}
                </ul>
            </div>
        )
    } else {
        return(
            <h3>Unauthorized. Please Sign Up or Log In!</h3>
            // <h3>{user.error}</h3>
        )
    }
}

export default Profile