import React, { ReactNode } from "react";
import styles from "@/styles/Home.module.css";

interface featuredProductGridComponentProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const FeaturedProductGrid: React.FC<
  featuredProductGridComponentProps
> = ({ title, children, className }) => {
  return (
    <div className={`${styles.featuredProductsContainer} ${className}`}>
      <h2>{title}</h2>
      <ul className={styles.productsGrid}>{children}</ul>
    </div>
  );
};
