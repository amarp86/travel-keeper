import { addComment } from "../services/comments";
import { useEffect, useState } from "react";

function NewComment(props) {
  const { allComments, postId } = props;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const preFillLikes = () => {
      setComments(allComments);
    };
    preFillLikes();
  }, [allComments]);

  const handleComment = async (e, content) => {
    e.preventDefault();
    const newComment = await addComment(postId, content);
    setComments((prevState) => [...prevState, newComment]);
  };
  return (
    <div className="add-comment">
      <form onSubmit={handleComment}>
        <textarea name="comment" value={content} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewComment;
