import { useState } from "react";
import { Link } from "react-router-dom";

const MyRewriteLink = ({rewrite, deleteRewrite}) => {
    
    const handleClick = () => {
        deleteRewrite(rewrite)
    }

    return (
        <div>
            {console.log(rewrite.id)}
            <Link to={`/songs/${rewrite.song_id}/rewrites/${rewrite.id}`}>{rewrite.title}</Link>
            <button onClick={e => handleClick(e)}></button>
        </div>
    )
}

export default MyRewriteLink