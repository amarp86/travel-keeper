import { useState } from "react";
import { useHistory } from "react-router-dom";
import { postPost } from "../../services/posts";
import "./PostCreate.css";
import { Button } from "@material-ui/core";

export default function PostCreate(props) {
  const history = useHistory();
  const { currentUser } = props;
  const [formData, setFormData] = useState({
    img_url: "",
    location: "",
    description: "",
  });
  const { img_url, location, description } = formData;

  const handleCreate = async () => {
    const newPost = await postPost(formData);

    props.setAllPosts((prevState) => [...prevState, newPost]);

    history.push("/explore");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      user_id: props.currentUser.id,
    }));
  };
  if (!currentUser) {
    return (
      <div className="not-logged-in">
        <h1>Please Log In First</h1>
      </div>
    );
  } else
    return (
      <form
        className="entire-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData);
        }}
      >
        <h3>Create Post</h3>
        <label>
          Image Link:
          <input
            className="input"
            type="text"
            name="img_url"
            value={img_url}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            className="input"
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            className="input"
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <div className="submit-create-button">
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className="submit-create-button"
          >
            Submit
          </Button>
        </div>
      </form>
    );
}
