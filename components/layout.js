import Nav from "./nav/Nav";
import Footer from "./footer/Footer";

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
