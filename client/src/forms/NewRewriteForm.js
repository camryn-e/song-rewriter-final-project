import { useEffect, useState } from "react";

const NewRewriteForm = ({original_lyrics}) => {

    const [title, setTitle] = useState('')
    const [rewritten_lyrics, setRewrittenLyrics] = useState('')

    return (
        <div>
            <form>
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