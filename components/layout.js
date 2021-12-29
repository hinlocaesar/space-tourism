// components/layout.js

import Navbar from "./navbar";
import Image from "next/image";
import BackgroundImgMobileMain from "../assets/home/background-home-mobile.jpg";
import homestyles from "../styles/Home.module.css";

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
