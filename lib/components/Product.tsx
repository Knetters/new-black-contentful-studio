import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Product = () => {
  return (
    <li key={product.id} className={`${styles.productContainer} ${className}`}>
      <Link href={`/product/${product.slug}`}>
        <img className={styles.productImage} src={product.imageURL} alt="" />
        <h2 className={styles.productTitle}>{product.title}</h2>
        <span className={styles.price}>€ {product.price}</span>
      </Link>
      <div className={styles.favoriteIcon}>
        <HeartOutline />
      </div>
    </li>
  );
};

export default Product;
