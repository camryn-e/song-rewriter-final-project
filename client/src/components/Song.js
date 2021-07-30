import { useEffect, useState } from "react";
import RewriteLink from "../links/RewriteLink";
import NewRewriteForm from "../forms/NewRewriteForm";

const Song = (props) => {
    // const [title, setTitle] = useState('');
    // const [rewrites, setRewrites] = useState([])
    // const [formFlag, setFormFlag] = useState(false);

    const [song, setSong] = useState({
        title: '',
        rewrites: []
    })
    const [formFlag, setFormFlag] = useState(false);
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(`/songs/${props.match.params.id}`)
          .then(response => response.json())
          .then(rewritesData => {
              console.log("rewrite data", rewritesData)
              setSong(rewritesData)
              console.log("rewrites", song.rewrites)
          })
    }, [props.match.params.id])


    const addRewrite = (rewrite) => {
        fetch(`/songs/${props.match.params.id}/rewrites`, {
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
                    rewrites: [...song.rewrites, newRewrite]
                })
            }
        })
        setFormFlag(false)
    }

    const rewriteList = song.rewrites.map(r => <RewriteLink key={r.id} rewrite={r}/>)

    // <RewriteLink key={r.id} rewrite={r}/>
    return(
        <div>
            <h2>{song.title}</h2>
            <ul>
                {rewriteList}
                {formFlag ? <NewRewriteForm addNewRewrite={addRewrite} original_lyrics={song.original_lyrics} song_id={song.id}/> : <button onClick={() => setFormFlag(true)}>Add Rewrite</button>}
            </ul>
            <h3>{error}</h3>
        </div>
    )

}

export default Song