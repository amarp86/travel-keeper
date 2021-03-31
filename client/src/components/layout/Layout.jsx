import Nav from "./Nav";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
