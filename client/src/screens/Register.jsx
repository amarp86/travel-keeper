import { useState } from "react";
import "./Register.css";
import { Button } from "@material-ui/core";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    verify: "",
  });
  const { username, email, password, name, verify } = formData;
  const { handleRegister } = props;

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
        handleRegister(formData);
      }}
    >
      <h3>Register</h3>
      <label>
        Username:
        <input
          className="input"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Name:
        <input
          className="input"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          className="input"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          className="input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <label>
        Verify:
        <input
          className="input"
          type="password"
          name="verify"
          value={verify}
          onChange={handleChange}
        />
      </label>
      <br />
      <Button type="submit" variant="outlined" color="default">
        Submit
      </Button>
    </form>
  );
}
