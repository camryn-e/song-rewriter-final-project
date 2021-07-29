import { useEffect, useState } from "react";
import SongLink from "../links/SongLink";
import NewSongForm from "../forms/NewSongForm";

const SongsPage = () => {
    const [songs, setSongs] = useState([])
    const [formFlag, setFormFlag] = useState(false)

    useEffect(() => {
        fetch('/songs')
        .then(r => r.json())
        .then(s => {
            console.log(s)
            setSongs(s)
        })
    }, [])

    const addSong = (song) => {
        fetch('/songs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(song)
        })
        .then(res => res.json())
        .then(newSong => {
            setSongs([...songs, newSong])
        })
        setFormFlag(false)
}

    const songsList = songs.map(s => <SongLink key={s.id} song={s}/>)

    return (
        <div>
            <ul>
                {songsList}
                {formFlag ? <NewSongForm addNewSong={addSong}/> : <button onClick={() => setFormFlag(true)}>Add Song</button>}
            </ul>
        </div>
    )

}

export default SongsPage