import Head from "next/head";
import Image from "next/image";
import commonstyles from "../styles/Common.module.css";
import styles from "../styles/Home.module.css";

import BackgroundImgMobileMain from "../assets/home/background-home-mobile.jpg";
import BackgroundImgMobileTablet from "../assets/home/background-home-tablet.jpg";
import NavBar from "../components/navbar";
import TempNavBar from "../components/tempnavbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.applyBgSwitchMobile}>
          <Image
            src={BackgroundImgMobileMain}
            alt="background image for mobile"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className={styles.applyBgSwitchTablet}>
          <Image
            src={BackgroundImgMobileTablet}
            alt="background image for mobile"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <NavBar />
        <div className={commonstyles.content}>
          <div className={commonstyles.title1}>So, you want to travel to</div>
          <div className={commonstyles.title2}> SPACE</div>
          <div className={commonstyles.description}>
            Let’s face it. if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>

          <div className={styles.home__explorebtn}> EXPLORE</div>
        </div>
      </main>
      <TempNavBar />
    </div>
  );
}
