import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
