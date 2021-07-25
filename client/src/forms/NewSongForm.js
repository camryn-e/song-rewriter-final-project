import { useEffect, useState } from "react";

const NewSongForm = () => {

    const [title, setTitle] = useState('')
    const [original_lyrics, setOriginalLyrics] = useState('')

    return (
        <div>
            <form>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
                <br/>
                <label for="original_lyrics">Original Lyrics:</label>
                <input type="text" id="original_lyrics" name="original_lyrics" value={original_lyrics} onChange={e => setOriginalLyrics(e.target.value)}/>
                <br/>
                <button type="submit">Add Song!</button>
            </form>
        </div>
    )


}

export default NewSongForm;