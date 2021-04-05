import Nav from "./Nav";
import Footer from "./Footer";
import "./Layout.css";

function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout">
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
      <div className="props-children">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
