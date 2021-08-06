import { useEffect, useState } from "react";
import MyRewriteLink from "../links/MyRewriteLink";

const Profile = () => {

  const [rewrites, setRewrites] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/rewrites`)
      .then((res) => res.json())
      .then((rewritesData) => {
        if (rewritesData.error) {
          setError(rewritesData.error);
        } else {
          setRewrites(rewritesData);
        }
      });
  }, []);

  const deleteRewrite = (rewrite) => {
    fetch(`/rewrites/${rewrite.id}`, {
      method: "DELETE",
    }).then(() => {
      const currentRewrites = rewrites.filter((e) => e.id !== rewrite.id);
      setRewrites(currentRewrites);
    });
  };

  if (error === "") {

    const rewriteList = rewrites.map((r) => (
      <MyRewriteLink key={r.id} rewrite={r} deleteRewrite={deleteRewrite} />
    ));

    return (
      <div>
        <ul>{rewriteList}</ul>
      </div>
    );
  } else {
    return <h3>Unauthorized. Please Sign Up or Log In!</h3>;
  }
};

export default Profile;
