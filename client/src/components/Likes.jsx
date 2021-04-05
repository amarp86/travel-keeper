import { useState, useEffect } from "react";
import { createLike } from "../services/likes";
import { Button } from "@material-ui/core";

function Likes(props) {
  const [likes, setLikes] = useState([]);
  const { allLikes, postId } = props;

  useEffect(() => {
    const preFillLikes = () => {
      setLikes(allLikes);
    };
    preFillLikes();
  }, [allLikes]);

  const handleLike = async () => {
    const newLike = await createLike(postId);
    setLikes((prevState) => [...prevState, newLike]);
  };

  return (
    <div className="likes">
      <Button
        variant="outlined"
        color="primary"
        className="like-button"
        onClick={handleLike}
      >
        Like
      </Button>
      <h3>{likes.length}</h3>
    </div>
  );
}

export default Likes;
