import { useEffect, useState } from "react";

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

    const rewriteList = user.rewrites.map(r => <div key={r.id}><p>{r.title}</p></div>)

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