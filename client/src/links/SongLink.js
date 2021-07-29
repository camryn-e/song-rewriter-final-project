import { useState } from "react";
import { Link } from "react-router-dom";

const SongLink = ({song}) => {
    
    return (
        <div>
            <Link to={`/songs/${song.id}`}>{song.title}</Link>
        </div>
        
    )
}

export default SongLink