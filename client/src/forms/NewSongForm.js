import { useEffect, useState } from "react";

const NewSongForm = ({addNewSong}) => {

    const [title, setTitle] = useState('')
    const [original_lyrics, setOriginalLyrics] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addNewSong({
            title: title,
            original_lyrics: original_lyrics
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="title">Title:
                <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
                </label>
                <br/>
                <label>Original Lyrics:
                <input type="text" id="original_lyrics" value={original_lyrics} onChange={e => setOriginalLyrics(e.target.value)}/>
                </label>
                <br/>
                <button type="submit">Add Song!</button>
            </form>
        </div>
    )


}

export default NewSongForm;