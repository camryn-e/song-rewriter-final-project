import { useEffect, useState } from "react";
import RewriteLink from "../links/RewriteLink";
import NewRewriteForm from "../forms/NewRewriteForm";

const Song = (props) => {

    const [song, setSong] = useState({
        title: '',
        rewrites: [],
        song_url: ''
    })

    const [formFlag, setFormFlag] = useState(false);
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(`/songs/${props.match.params.song_id}/rewrites`)
          .then(response => response.json())
          .then(rewritesData => {
              console.log("rewrite data", rewritesData)
              setSong(rewritesData)
              console.log(song.song_url)
        })
    }, [props.match.params.song_id])


    const addRewrite = (rewrite) => {
        fetch(`/songs/${props.match.params.song_id}/rewrites`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rewrite)
        })
        .then(res => res.json())
        .then(newRewrite => {
            if(newRewrite.error) {
                setError(newRewrite.error)
            }else{
                setSong({
                    ...song,
                    rewrites: [...song.rewrites, newRewrite]
                })
            }
        })
        setFormFlag(false)
    }

    const rewriteList = song.rewrites.map((r) => <RewriteLink key={r.id} rewrite={r}/>)

    if(props.loggedIn){
        return(
            <div>
                <h2>{song.title}</h2>
                <p>{song.original_lyrics}</p>
                <ul>
                    {rewriteList}
                    {formFlag ? <NewRewriteForm addNewRewrite={addRewrite} original_lyrics={song.original_lyrics} song_id={song.id}/> : <button onClick={() => setFormFlag(true)}>Add Rewrite</button>}
                </ul>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${song.song_url}`} allow='autoplay' title="YouTube video player" frameBorder="0" allowFullScreen autoPlay={true}></iframe>
                <h3>{error}</h3>
            </div>
        )
    } else {
        return(
            <div>
                <h2>{song.title}</h2>
                <p>{song.original_lyrics}</p>
                <ul>
                    {rewriteList}
                </ul>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${song.song_url}`} allow='autoplay' title="YouTube video player" frameBorder="0" allowFullScreen autoPlay={true}></iframe>
                <h3>{error}</h3>
            </div>
        )
    }

}

export default Song