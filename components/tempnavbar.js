import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import tempstyles from "../styles/Tempstyles.module.css";

function tempnavbar() {
  return (
    <>
      <div className={styles.navbar}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>

      <div className={styles.navbar}>
        <Link href="/destination_a">
          <a>Destination A</a>
        </Link>
      </div>

      <div className={styles.navbar}>
        <Link href="/crew_a">
          <a>Crew A</a>
        </Link>
      </div>
    </>
  );
}

export default tempnavbar;
