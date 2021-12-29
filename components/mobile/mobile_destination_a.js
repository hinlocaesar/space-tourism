import React from "react";
import Image from "next/image";
import MoonImage from "../../assets/destination/image-moon.png";
import styles from "../../styles/Destination.module.css";

function mobile_destination_a() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title1}>01 Pick your destination</div>

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

          <div className={styles.title2}> MOON</div>
          <div className={styles.description}>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </div>

          <div className={styles.explorebtn}> EXPLORE</div>
        </div>
      </div>
    </>
  );
}

export default mobile_destination_a;
