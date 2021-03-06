import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PostEdit.css";
import { Button } from "@material-ui/core";

export default function PostEdit(props) {
  const [formData, setFormData] = useState({
    img_url: "",
    location: "",
    description: "",
  });
  let { img_url, description, location } = formData;
  const { id } = useParams();
  const { allPosts, handleUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const postData = allPosts.find((post) => post.id === Number(id));
      setFormData({
        img_url: postData.img_url,
        location: postData.location,
        description: postData.description,
      });
    };
    if (allPosts.length) {
      prefillFormData();
    }
  }, [allPosts, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="entire-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}
    >
      <h3>Edit Post</h3>
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
      <div className="submit-edit-button">
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          className="submit-edit-button"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
