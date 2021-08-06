import { useState } from "react";

const NewSongForm = ({ addNewSong }) => {
  const [title, setTitle] = useState("");
  const [original_lyrics, setOriginalLyrics] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewSong({
      title: title,
      original_lyrics: original_lyrics,
      song_url: url
    });
  };

  return (
    <div class='form'>
      <br/>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <br/>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Original Lyrics:
          <br/>
          <textarea
            cols="50"
            rows="10"
            id="original_lyrics"
            value={original_lyrics}
            onChange={(e) => setOriginalLyrics(e.target.value)}
          />
        </label>
        <br />
        <label>
          Youtube Link:
          <br/>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
};

export default NewSongForm;
