// components/layout.js

import Navbar from "./navbar";
import MobileHome from "./mobile/mobile_home";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <MobileHome />
      <main>{children}</main>
    </>
  );
}
