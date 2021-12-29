import React from "react";
import Image from "next/image";
import BackgroundImgMobile from "../assets/home/background-home-mobile.jpg";
import styles from "../styles/Home.module.css";
function home() {
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
    </>
  );
}

export default home;
