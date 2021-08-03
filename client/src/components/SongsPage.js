import { useEffect, useState } from "react";
import SongLink from "../links/SongLink";
import NewSongForm from "../forms/NewSongForm";
// import { ProgressPlugin } from "webpack";

const SongsPage = ({ loggedIn }) => {
  const [songs, setSongs] = useState([]);
  const [formFlag, setFormFlag] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/songs")
      .then((r) => r.json())
      .then((s) => {
        if (s.error) {
          setError(s.error);
          console.log(s.error);
        }
        setSongs(s);
      });
  }, []);

  const addSong = (song) => {
    fetch("/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(song),
    })
      .then((res) => res.json())
      .then((newSong) => {
        if (newSong.error) {
          setError(newSong.error);
        } else {
          setSongs([...songs, newSong]);
        }
      });
    setFormFlag(false);
  };

  const songsList = songs.map((s) => <SongLink key={s.id} song={s} />);

  if (loggedIn) {
    return (
      <div>
        <ul>
          {songsList}
          {formFlag ? (
            <NewSongForm addNewSong={addSong} />
          ) : (
            <button onClick={() => setFormFlag(true)}>Add Song</button>
          )}
        </ul>
        <h3>{error}</h3>
      </div>
    );
  } else {
    return <ul>{songsList}</ul>;
  }
};

export default SongsPage;
