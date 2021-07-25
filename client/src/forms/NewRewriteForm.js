import { useEffect, useState } from "react";

const NewRewriteForm = () => {

    const [title, setTitle] = useState('')
    const [rewritten_lyrics, setRewrittenLyrics] = useState('')

    return (
        <div>
            <form>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
                <br/>
                <label for="rewritten_lyrics">Rewritten Lyrics:</label>
                <input type="text" id="rewritten_lyrics" name="rewritten_lyrics" value={rewritten_lyrics} onChange={e => setRewrittenLyrics(e.target.value)}/>
                <br/>
                <button type="submit">Add Rewrite!</button>
            </form>
        </div>
    )

}

export default NewRewriteForm;
