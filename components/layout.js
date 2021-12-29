// components/layout.js

import Navbar from "./navbar";

import basetyle from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <div className={basetyle.configlayout}>
        <Navbar />

        <main>{children}</main>
      </div>
    </>
  );
}
