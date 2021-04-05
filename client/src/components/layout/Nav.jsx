import { Link } from "react-router-dom";
import "./Nav.css";
import Hamburger from "./Hamburger";
import HamburgerLogout from "./HamburgerLogout";
import { Button } from "@material-ui/core";

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
            <div className="welcome-user">Logged In As: {currentUser.name}</div>
            <div className="hamburger-menu">
              <Hamburger
                handleLogout={handleLogout}
                currentUser={currentUser}
              />
            </div>
            <div className="logged-in-links">
              <Link to="/explore">
                <Button variant="outlined" color="default" className="button">
                  Explore
                </Button>
              </Link>
              <Link to="/createpost">
                <Button variant="outlined" color="default" className="button">
                  New Post
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="contained"
                  color="secondary"
                  className="logout-button"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Link>
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
                <Button variant="outlined" color="default">
                  Explore
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="contained"
                  color="secondary"
                  className="Button"
                >
                  Login
                </Button>
              </Link>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default Nav;
