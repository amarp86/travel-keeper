import { useState } from "react";
import { addComment } from "../services/comments";
import "./NewComment.css";

export default function FoodCreate(props) {
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
      <button>Submit</button>
    </form>
  );
}
