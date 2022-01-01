import React from "react";
import Image from "next/image";
import Logo from "../assets/shared/logo.svg";
import Hamburger from "../assets/shared/icon-hamburger.svg";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
function navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <Image src={Logo} alt="Logo" />
        <div className={styles.isMobile}>
          <Image src={Hamburger} alt="Hamburger" />
        </div>

        <div className={styles.isTablet}>
          <div className={styles.bigNav} >
            <div className={styles.bigNavItem}>HOME</div>
            <div className={styles.bigNavItem}>DESTINATION</div>
            <div className={styles.bigNavItem}>CREW</div>
            <div className={styles.bigNavItem}>TECHNOLOGY</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default navbar;
