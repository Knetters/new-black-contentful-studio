import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import {
  fetchAllProductEntries,
  fetchProductIds,
  fetchProducts,
} from "../../src/utils/contentful";
import Link from "next/link";
import HeartOutline from "@/components/icons/HeartOutline";
import HeartFilled from "@/components/icons/HeartFilled";

interface Product {
  id: string;
  title: string;
  slug: string;
  price: number;
  imageURL: string;
}

interface ProductId {
  ids: string[];
}

interface ProductGridComponentProps {
  title: string;
  slug: string;
  productList: string;
  className?: string;
}

export const ProductGrid: React.FC<ProductGridComponentProps> = ({
  title,
  slug,
  productList,
  className,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productCount, setProductCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedProducts: Product[] = [];
        if (!slug) {
          const entries = await fetchAllProductEntries("en");
          fetchedProducts = entries.map((entry: any) => ({
            id: entry.sys.id,
            title: entry.fields.title,
            slug: entry.fields.slug,
            price: entry.fields.price,
            imageURL: entry.fields.image.fields.file.url,
          }));
        } else {
          const entries = await fetchProductIds("en");
          const productIdData = entries.map((entry: any) => ({
            ids: entry.fields.products,
          }));
          const productIds = productIdData.flatMap(
            (entry: ProductId) => entry.ids
          );
          fetchedProducts = await fetchProducts(productIds, "en");
        }
        setProducts(fetchedProducts);
        setProductCount(fetchedProducts.length);
      } catch (error) {
        console.error("Error fetching product entries:", error);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <div className={className}>
      <h2 className={styles.gridTitle}>{title}</h2>
      <p className={styles.productCount}>{productCount} Artikelen</p>
      <ul className={styles.productsGrid}>
        {products.map((product) => (
          <li
            key={product.id}
            className={`${styles.productContainer} ${className}`}
          >
            <Link href={`/product/${product.slug}`}>
              <img
                className={styles.productImage}
                src={product.imageURL}
                alt=""
              />
              <h2 className={styles.productTitle}>{product.title}</h2>
              <span className={styles.price}>€ {product.price}</span>
            </Link>
            <div className={styles.favoriteIcon}>
              <HeartOutline />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
