import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

interface featuredProductComponentProps {
  title: string;
  slug: string;
  imageURL: string;
  price: number;
  className?: string;
}

export const featuredProduct: React.FC<featuredProductComponentProps> = ({
  title,
  slug,
  imageURL,
  price,
  className,
}) => {
  return (
    <li className={`${styles.productContainer} ${className}`}>
      <Link href={`/product/${slug}`}>
        <div>
          <img className={styles.productImage} src={`${imageURL}`} alt="" />
          <h2>{title}</h2>
          <span>€{price}</span>
        </div>
      </Link>
    </li>
  );
};
