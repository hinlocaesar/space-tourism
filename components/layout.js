// components/layout.js

import Navbar from "./navbar";
import MobileHome from "./mobile/mobile_home";
import MobileDestA from "./mobile/mobile_destination_a";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <MobileDestA />
      <main>{children}</main>
    </>
  );
}
