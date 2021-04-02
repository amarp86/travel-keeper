import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="nav">
      <header>
        <Link to="/">
          <h1 className="title">Travel Keeper</h1>
        </Link>
        {currentUser ? (
          <div className="logged-in-links">
            <Link to="/explore">Explore</Link>
            <Link to="/createpost">New Post</Link>
            <a href="/">Welcome: {currentUser.username}</a>
            <button className="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="logged-out-links">
            <Link to="/explore">Explore</Link>
            <Link to="/login">
              <button className="button">Login</button>
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}

export default Nav;
