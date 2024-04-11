import styles from "@/styles/Home.module.css";
import React, { ReactNode } from "react";
import Link from "next/link";

interface NavbarComponentProps {
  links: {
    label: string;
    url: string;
  }[];
}

export const Navbar: React.FC<NavbarComponentProps> = ({
  links,
}) => {
  return links ? (
    <div>
      <nav className={styles.nav}>
        {links.map((link, index) => (
          <Link className={styles.navItem} key={index} href={link.url}>
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  ) : (
    <p>geen links</p>
  );
};
