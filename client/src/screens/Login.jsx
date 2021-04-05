import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

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
        handleLogin(formData);
      }}
    >
      <h3>Login</h3>
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
        Password:
        <input
          className="input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <div className="button-area">
        <button className="submit-button">Submit</button>
        <div className="sign-up-area">
          <p>Don't have an account? </p>
          <Link to="/register">
            <button className="sign-up-button">Sign Up</button>
          </Link>
        </div>
      </div>
    </form>
  );
}
