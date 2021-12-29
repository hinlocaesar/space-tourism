// components/layout.js

import Navbar from "./navbar";
import Footer from "./footer";
import Home from "./home";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Home />
      <main>{children}</main>
      <Footer />
    </>
  );
}
