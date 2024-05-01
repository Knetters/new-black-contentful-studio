import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import HeartOutline from "@/components/icons/HeartOutline";
import HeartFilled from "@/components/icons/HeartFilled";

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
  // Log data when the component is rendered
  console.log("Featured Product Component Data:", {
    title,
    slug,
    imageURL,
    price,
    className,
  });

  return (
    <li className={`${styles.productContainer} ${className}`}>
      <Link href={`/product/${slug}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.productImage} src={imageURL} alt="" />
        <h2 className={styles.productTitle}>{title}</h2>
        <span className={styles.price}>€ {price}</span>
      </Link>
      <div className={styles.favoriteIcon}>
        <HeartOutline />
      </div>
    </li>
  );
};
