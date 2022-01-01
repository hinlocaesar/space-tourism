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
      </div>
    </>
  );
}

export default navbar;
