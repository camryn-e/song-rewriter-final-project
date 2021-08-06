import { useState } from "react";

const EditLyricsForm = ({ rewritten_lyrics, editRewrite }) => {
  const [edited_lyrics, setEditedLyrics] = useState(rewritten_lyrics);

  const handleSubmit = (e) => {
    e.preventDefault();
    editRewrite(edited_lyrics);
  };

  return (
    <div class='form'>
      <form onSubmit={handleSubmit}>
        <label>
          Edit Lyrics:
          <textarea
            cols="50"
            rows="10"
            id="edited_lyrics"
            value={edited_lyrics}
            onChange={(e) => {
                console.log(e.target.value)
                setEditedLyrics(e.target.value)
            }}
          />
        </label>
        <br />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
};

export default EditLyricsForm;