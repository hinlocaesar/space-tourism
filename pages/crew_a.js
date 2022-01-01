import Head from "next/head";
import Image from "next/image";
import commonstyles from "../styles/Common.module.css";
import styles from "../styles/Crew.module.css";

import BackgroundImgMobileMain from "../assets/destination/background-destination-mobile.jpg";
import CrewImage from "../assets/crew/image-douglas-hurley.png";
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
          <div className={commonstyles.title1}>02 Meet your crew</div>
          <div className={styles.img}>
            <div className={styles.imgWrapper}>
              <Image
                src={CrewImage}
                alt="image of the crew commander"
                height={224}
                width={158}
              />
            </div>
          </div>
          <div className={commonstyles.dest_line}> </div>
          <div className={commonstyles.description}>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
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
