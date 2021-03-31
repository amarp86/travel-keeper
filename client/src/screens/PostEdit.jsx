import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostEdit(props) {
  const [formData, setFormData] = useState({});
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
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}
    >
      <h3>Edit Post</h3>
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
