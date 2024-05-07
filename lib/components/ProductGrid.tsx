import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import {
  fetchAllProductEntries,
  fetchProductIds,
  fetchProducts, // Import fetchProducts function
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
  if (!slug) {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const entries = await fetchAllProductEntries("en");
          const productsData = entries.map((entry: any) => ({
            id: entry.sys.id,
            title: entry.fields.title,
            slug: entry.fields.slug,
            price: entry.fields.price,
            imageURL: entry.fields.image.fields.file.url,
            // Add other fields as needed
          }));
          setProducts(productsData);
        } catch (error) {
          console.error("Error fetching product entries:", error);
        }
      };

      fetchData();
    }, []);

    return (
      <div className={className}>
        <h2>{title}</h2>
        <ul className={styles.productsGrid}>
          {products.map((product) => (
            <li
              key={product.id}
              className={`${styles.productContainer} ${className}`}
            >
              <Link href={`/product/${product.slug}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
  } else {
    const [products, setProducts] = useState<Product[]>([]); // State to store fetched products

    useEffect(() => {
      const fetchData = async () => {
        try {
          const entries = await fetchProductIds("en");
          const productIdData = entries.map((entry: any) => ({
            ids: entry.fields.products,
            // Add other fields as needed
          }));

          const productIds = productIdData.flatMap(
            (entry: ProductId) => entry.ids
          ); // Flatten product IDs array
          // console.log(productIds);
          const fetchedProducts = await fetchProducts(productIds, "en"); // Fetch products by IDs
          setProducts(fetchedProducts);
        } catch (error) {
          console.error("Error fetching product entries:", error);
        }
      };

      fetchData();
    }, []);

    return (
      <div className={className}>
        <h2>{title}</h2>
        <ul className={styles.productsGrid}>
          {products.map((product) => (
            <li
              key={product.id}
              className={`${styles.productContainer} ${className}`}
            >
              <Link href={`/product/${product.slug}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
  }
};
