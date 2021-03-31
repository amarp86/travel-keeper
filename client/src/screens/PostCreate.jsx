import { useState } from "react";
import { useHistory } from "react-router-dom";
import { postPost } from "../services/posts";

export default function PostCreate(props) {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({});
  const { img_url, location, description } = formData;

  const handleCreate = async () => {
    const newPost = await postPost(formData);

    setPosts((prevState) => [...prevState, newPost]);
    console.log(posts);
    history.push("/posts");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      user_id: props.currentUser.id,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3>Create Post</h3>
      <label>
        Image Link:
        <input
          type="text"
          name="img_url"
          value={img_url}
          onChange={handleChange}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}