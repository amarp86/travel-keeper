import { Link } from "react-router-dom";

function Nav(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="nav">
      <header>
        <Link to="/">
          <h1>Travel Keeper</h1>
        </Link>
        {currentUser ? (
          <>
            <Link to="/explore">
              <h4>Explore</h4>
            </Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}

        {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </header>
    </div>
  );
}

export default Nav;
