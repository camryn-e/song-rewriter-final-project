import { useEffect, useState } from "react";

const Rewrite = (props) => {
    
    const [rewrite, setRewrite] = useState({
        title: '',
        rewritten_lyrics: ''
    })

    useEffect(() => {
        fetch(`/songs/${props.match.params.song_id}/rewrites/${props.match.params.id}`)
        .then(res => res.json())
        .then(rewriteData => {
            setRewrite(rewriteData)
            // console.log(rewriteData.user)
        })
    }, [props.match.params.id])

    return (
        <div>
            <h2>{rewrite.title}</h2>
            <p>{rewrite.rewritten_lyrics}</p>
            {/* <p>By: {rewrite.user.username}</p> */}
        </div>
    )

}

export default Rewrite