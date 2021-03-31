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
