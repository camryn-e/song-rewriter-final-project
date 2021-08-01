import { useEffect, useState } from "react";
import EditLyricsForm from '../forms/EditLyricsForm'

const Rewrite = (props) => {
    
    const [rewrite, setRewrite] = useState({
        title: '',
        rewritten_lyrics: '',
        user: {}
    })
    const [formFlag, setFormFlag] = useState(false)

    useEffect(() => {
        fetch(`/songs/${props.match.params.song_id}/rewrites/${props.match.params.id}`)
        .then(res => res.json())
        .then(rewriteData => {
            setRewrite(rewriteData)
            console.log("rewrite data user", rewriteData.user)
            console.log(rewriteData.user)
        })
    }, [props.match.params.id, props.match.params.song_id])

    const updateRewrite = (editedRewrite) => {
        fetch(`/me/${rewrite.id}`,{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                rewritten_lyrics: editedRewrite
            })
          })
          .then(res => res.json())
          .then(updatedRewrite => {
            setRewrite({
                ...rewrite,
                rewritten_lyrics: updatedRewrite.rewritten_lyrics
            })
        })
        setFormFlag(false)
    }

    return (
        <div>
            <h2>{rewrite.title}</h2>
            {rewrite.rewritten_lyrics}
            <p>By: {rewrite.user.username}</p>
            {formFlag ? <EditLyricsForm editRewrite={updateRewrite} rewritten_lyrics={rewrite.rewritten_lyrics} rewrite={rewrite}/> : <button onClick={() => setFormFlag(true)}>Edit Lyrics</button>}
        </div>
    )

}

export default Rewrite