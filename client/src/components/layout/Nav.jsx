import { Link } from "react-router-dom";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "../../services/auth";

function Nav(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="nav">
      <header>
        <Link to="/">
          <h1>Tasteville</h1>
        </Link>
        {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login/Register</Link>
        )}
      </header>
    </div>
  );
}

export default Nav;
