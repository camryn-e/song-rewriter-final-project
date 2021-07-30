import { useEffect, useState } from "react";
import RewriteLink from "../links/RewriteLink";

const Profile = ({user}) => {
    
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

    const rewriteList = user.rewrites.map(r => <RewriteLink key={r.id} rewrite={r}/>)

    return (
        <div>
            <h2>{user.name}</h2>
            <ul>
                {rewriteList}
            </ul>
        </div>
    )

}

export default Profile