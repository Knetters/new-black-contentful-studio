import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link className={`${styles.navItem} ${styles.active}`} href="/">
        Whats new
      </Link>
      <Link className={styles.navItem} href="/">
        Dames
      </Link>
      <Link className={styles.navItem} href="/">
        Heren
      </Link>
      <Link className={styles.navItem} href="/">
        Kinderen
      </Link>
      <Link className={styles.navItem} href="/">
        Last change
      </Link>
      <Link className={styles.navItem} href="/">
        Outlet
      </Link>
    </nav>
  );
};

export default Navbar;
