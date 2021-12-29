// components/layout.js

import Navbar from "./navbar";
import Image from "next/image";
import BackgroundImgMobileMain from "../assets/home/background-home-mobile.jpg";
import homestyles from "../styles/Home.module.css";

import BackgroundImgMobileDest from "../assets/destination/background-destination-mobile.jpg";
import deststyles from "../styles/Destination.module.css";
export default function Layout({ children }) {
  return (
    <>
      <Image
        className={deststyles.backgroundImage}
        src={BackgroundImgMobileDest}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      <Navbar />

      <main>{children}</main>
    </>
  );
}
