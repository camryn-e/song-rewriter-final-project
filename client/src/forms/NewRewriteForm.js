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
                <button type="submit">Submit!</button>
            </form>
        </div>
    )

}

export default NewRewriteForm;