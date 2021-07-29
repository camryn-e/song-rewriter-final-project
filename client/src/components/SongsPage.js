import { useEffect, useState } from "react";

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

    const songsList = songs.map(s => <div key={s.id}><li>{s.title}</li></div>)

    return (
        <div>
            <ul>
                {songsList}
            </ul>
        </div>
    )

}

export default SongsPage