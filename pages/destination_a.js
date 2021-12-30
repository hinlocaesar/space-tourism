import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Destination.module.css";

import BackgroundImgMobileMain from "../assets/home/background-home-mobile.jpg";
import MoonImage from "../assets/destination/image-moon.png";
import NavBar from "../components/navbar";
import TempNavBar from "../components/tempnavbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.backgroundImage}
        src={BackgroundImgMobileMain}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <TempNavBar />
      <NavBar />
      <main>
        <div className={styles.home__content}>
          <div className={styles.home__title1}>01 Pick your destination</div>

          <div className={styles.img}>
            <Image
              src={MoonImage}
              width={170}
              height={170}
              alt="image of the moon"
            />
          </div>

          <div className={styles.dest_menu}>
            <div className={styles.dest_menu_item}>MOON</div>
            <div className={styles.dest_menu_item}>MARS</div>
            <div className={styles.dest_menu_item}>EUROPA</div>
            <div className={styles.dest_menu_item}>TITAN</div>
          </div>
          <div className={styles.home__title1}>MOON</div>
          <div className={styles.home__description}>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </div>

          <div className={styles.dest_line}> </div>

          <div className={styles.home__explorebtn}> EXPLORE</div>
        </div>
      </main>
    </div>
  );
}
