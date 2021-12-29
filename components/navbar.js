import React from "react";
import Image from "next/image";
import Logo from "../assets/shared/logo.svg";
import Hamburger from "../assets/shared/icon-hamburger.svg";
import styles from "../styles/Navbar.module.css";
function navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <Image src={Logo} alt="Logo" />
        <Image src={Hamburger} alt="Hamburger" q />
      </div>
    </>
  );
}

export default navbar;
