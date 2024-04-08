import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link className={`${styles.navItem} ${styles.active}`} href="/about">
        Whats new
      </Link>
      <Link className={styles.navItem} href="/about">
        Dames
      </Link>
      <Link className={styles.navItem} href="/about">
        Heren
      </Link>
      <Link className={styles.navItem} href="/about">
        Kinderen
      </Link>
      <Link className={styles.navItem} href="/about">
        Last change
      </Link>
      <Link className={styles.navItem} href="/about">
        Outlet
      </Link>
    </nav>
  );
};

export default Navbar;
