import { useEffect, useState } from "react";
import SongLink from "../links/SongLink";

const SongsPage = () => {
    const [songs, setSongs] = useState([])

    useEffect(() => {
        fetch('/songs')
        .then(r => r.json())
        .then(s => {
            console.log(s)
            setSongs(s)
        })
    }, [])

    const songsList = songs.map(s => <SongLink key={s.id} song={s}/>)

    return (
        <div>
            <ul>
                {songsList}
            </ul>
        </div>
    )

}

export default SongsPage