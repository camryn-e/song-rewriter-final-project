import { useEffect, useState } from "react";

const NewRewriteForm = (props) => {

    const [title, setTitle] = useState('')
    const [rewritten_lyrics, setRewrittenLyrics] = useState(props.original_lyrics)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addNewRewrite({
            title: title,
            rewritten_lyrics: rewritten_lyrics
        })
        // fetch('/add-rewrite', {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": 'application/json'
        //     },
        //     body: JSON.stringify({
        //         title: title,
        //         rewritten_lyrics: rewritten_lyrics,
        //         song_id: props.song_id
        //     })
        // })
        // .then(res => res.json())
        // .then(r => {

        // })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title:
                <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
                </label>
                <br/>
                <label>Rewrite Lyrics:
                <textarea cols="50" rows="10" id="rewritten_lyrics" value={rewritten_lyrics} onChange={e => setRewrittenLyrics(e.target.value)}/>
                </label>
                <br/>
                <button type="submit">Add Rewrite!</button>
            </form>
        </div>
    )

}

export default NewRewriteForm;