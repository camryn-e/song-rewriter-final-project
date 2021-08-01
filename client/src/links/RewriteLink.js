import { Link } from "react-router-dom";

const RewriteLink = ({ rewrite }) => {
  return (
    <div>
        <Link to={`/songs/${rewrite.song_id}/rewrites/${rewrite.id}`}>{rewrite.title}</Link>
    </div>
  );
};

export default RewriteLink;
