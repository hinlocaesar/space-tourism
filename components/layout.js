// components/layout.js

import Navbar from "./navbar";
import Image from "next/image";
import BackgroundImgMobile from "../assets/home/background-home-mobile.jpg";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Image
        className={styles.backgroundImage}
        src={BackgroundImgMobile}
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
