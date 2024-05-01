import React, { ReactNode } from "react";
import styles from "@/styles/Home.module.css";

interface featuredProductGridComponentProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const featuredProductGrid: React.FC<
  featuredProductGridComponentProps
> = ({ title, children, className }) => {
  return (
    <div className={`${styles.featuredProductsContainer} ${className}`}>
      <h2>{title}</h2>
      <ul className={styles.featuredProductsGrid}>{children}</ul>
    </div>
  );
};
