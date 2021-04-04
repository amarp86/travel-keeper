import { Link } from "react-router-dom";
import "./Nav.css";
import Hamburger from "./Hamburger";
import HamburgerLogout from "./HamburgerLogout";

function Nav(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="nav">
      <header>
        <Link to="/">
          <h1 className="title">Travel Keeper</h1>
        </Link>
        {currentUser ? (
          <>
            <div className="hamburger-menu">
              <Hamburger
                handleLogout={handleLogout}
                currentUser={currentUser}
              />
            </div>
            <div className="logged-in-links">
              <Link to="/explore">
                <button>Explore</button>
              </Link>
              <Link to="/createpost">
                <button>New Post</button>
              </Link>

              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="hamburger-menu">
              <HamburgerLogout
                handleLogout={handleLogout}
                currentUser={currentUser}
              />
            </div>
            <div className="logged-out-links">
              <Link className="logged-out-explore" to="/explore">
                <button>Explore</button>
              </Link>
              <Link to="/login">
                <button className="button">Login</button>
              </Link>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default Nav;
