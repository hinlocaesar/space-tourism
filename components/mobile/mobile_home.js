import React from "react";
import Image from "next/image";
import BackgroundImgMobile from "../../assets/home/background-home-mobile.jpg";
import styles from "../../styles/Home.module.css";
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
      <div className={styles.home__content}>
        <div className={styles.home__title1}>So, you want to travel to</div>
        <div className={styles.home__title2}> SPACE</div>
        <div className={styles.home__description}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>

        <div className={styles.home__explorebtn}> EXPLORE</div>
      </div>
    </>
  );
}

export default home;
