import { Link } from "react-router-dom";

const MyRewriteLink = ({ rewrite, deleteRewrite }) => {
  
    const handleClick = () => {
        deleteRewrite(rewrite);
    };

  return (
    <div>
      <Link to={`/me/${rewrite.id}`}>
        {rewrite.title}
      </Link>
      <button onClick={handleClick}>X</button>
    </div>
  );
};

export default MyRewriteLink;
