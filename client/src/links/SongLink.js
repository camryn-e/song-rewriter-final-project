import { Link } from "react-router-dom";

const SongLink = ({ song }) => {
  return (
    <div class="link">
      <Link to={`/songs/${song.id}/rewrites`}>{song.title}</Link>
    </div>
  );
};

export default SongLink;