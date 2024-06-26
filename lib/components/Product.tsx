/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import HeartOutline from "@/components/icons/HeartOutline";

interface ProductProps {
  id: string;
  title: string;
  slug: string;
  price: number;
  imageURL: string;
}

const Product: React.FC<ProductProps> = ({
  id,
  title,
  slug,
  price,
  imageURL,
}) => {
  return (
    <>
      {imageURL && (
        <li key={id} className={styles.productContainer}>
          <Link href={`/product/${slug}`}>
            <img
              className={styles.productImage}
              src={imageURL}
              alt=""
              loading="lazy"
            />
            <h2 className={styles.productTitle}>{title}</h2>
            <span className={styles.price}>€ {price}</span>
          </Link>
          <div className={styles.favoriteIcon}>
            <HeartOutline />
          </div>
        </li>
      )}
    </>
  );
};

export default Product;
