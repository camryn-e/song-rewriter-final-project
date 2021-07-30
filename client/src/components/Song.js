import { useEffect, useState } from "react";

const Song = (props) => {
    // const [title, setTitle] = useState('');
    // const [rewrites, setRewrites] = useState([])
    // const [formFlag, setFormFlag] = useState(false);

    const [song, setSong] = useState({})


    useEffect(() => {
        fetch(`/songs/${props.match.params.id}`)
          .then(response => response.json())
          .then(rewritesData => {
              console.log(rewritesData)
              setSong(rewritesData)
          })
    }, [props.match.params.id])



    return(
        <div>
            <h2>{song.title}</h2>
        </div>
    )

}

export default Song