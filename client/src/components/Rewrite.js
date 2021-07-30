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
        })
    }, [props.match.params.id])

    return (
        <div>
            <h2>{rewrite.title}</h2>
            <p>{rewrite.rewritten_lyrics}</p>
        </div>
    )

}

export default Rewrite