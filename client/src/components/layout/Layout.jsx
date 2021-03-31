import Nav from "./Nav";
import Footer from "./Footer";

function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
