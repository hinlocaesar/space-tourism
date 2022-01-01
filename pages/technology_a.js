import Head from "next/head";
import Image from "next/image";
import commonstyles from "../styles/Common.module.css";
import styles from "../styles/Technology.module.css";

import BackgroundImgMobileMain from "../assets/technology/background-technology-mobile.jpg";
import TechnologyImage from "../assets/technology/image-launch-vehicle-landscape.jpg";
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
          <div className={commonstyles.title1}> 03 Space launch 101</div>

          <div className={styles.imgWrapper}>
            <Image src={TechnologyImage} alt="image of Technology" />
          </div>

          <div className={styles.dest_menu}>
            <div className={styles.dest_menu_item}>1</div>
            <div className={styles.dest_menu_item}>2</div>
            <div className={styles.dest_menu_item}>3</div>
          </div>

          <div className={styles.small_font1}> The terminology...</div>
          <div className={styles.small_font2}> Launch vehicle</div>

          <div className={commonstyles.description}>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </div>
        </div>
      </main>
      <TempNavBar />
    </div>
  );
}
