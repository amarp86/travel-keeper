import { useState } from "react";
import { addComment } from "../services/comments";
import "./NewComment.css";
import { Button } from "@material-ui/core";

export default function CommentCreate(props) {
  const [formData, setFormData] = useState({
    user_id: "",
    comment: "",
    post_id: "",
  });
  const { comment } = formData;
  const { postId, currentUser, setToggle } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleComment = async (e) => {
    e.preventDefault();
    await addComment(postId, {
      content: comment,
      user_id: currentUser.id,
      post_id: postId,
    });
    setToggle((curr) => !curr);
    setFormData({ comment: "" });
  };

  return (
    <form onSubmit={handleComment}>
      <h3>Add A Comment</h3>
      <label>
        New Comment:
        <input
          className="input"
          type="text"
          name="comment"
          value={comment}
          onChange={handleChange}
        />
      </label>
      <Button
        type="submit"
        variant="outlined"
        color="default"
        className="like-button"
      >
        Submit
      </Button>
    </form>
  );
}
