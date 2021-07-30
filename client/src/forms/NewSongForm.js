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
                <label>Title:
                <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
                </label>
                <br/>
                <label>Original Lyrics:
                <textarea cols="50" rows="10" id="original_lyrics" value={original_lyrics} onChange={e => setOriginalLyrics(e.target.value)}/>
                </label>
                <br/>
                <button type="submit">Submit!</button>
            </form>
        </div>
    )


}

export default NewSongForm;