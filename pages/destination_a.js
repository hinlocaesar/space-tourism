import Head from "next/head";
import Image from "next/image";
import commonstyles from "../styles/Common.module.css";
import styles from "../styles/Destination.module.css";

import BackgroundImgMobileMain from "../assets/destination/background-destination-mobile.jpg";
import MoonImage from "../assets/destination/image-moon.png";
import NavBar from "../components/navbar";
import TempNavBar from "../components/tempnavbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <Image
          src={BackgroundImgMobileMain}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        <NavBar />
        <div className={commonstyles.content}>
          <div className={commonstyles.title1}>01 PICK YOUR DESTINATION</div>
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
          <div className={styles.big_font}>MOON</div>
          <div className={commonstyles.description}>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </div>
          <div className={commonstyles.dest_line}> </div>

          <div className={commonstyles.title1}>Avg. distance</div>
          <div className={styles.small_font}>384,400 km </div>
          <div className={commonstyles.title1}>Est. travel time</div>
          <div className={styles.small_font}>3 days</div>
        </div>
      </main>
      <TempNavBar />
    </div>
  );
}
