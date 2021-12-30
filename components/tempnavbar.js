import Link from "next/link";
import styles from "../styles/Navbar.module.css";

function tempnavbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/destination_a">
          <a>Destination A</a>
        </Link>
      </li>
    </ul>
  );
}

export default tempnavbar;
