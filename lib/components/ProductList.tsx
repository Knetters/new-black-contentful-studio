import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import Product from "./Product";
import FilterBar from "./FilterBar";

interface ProductListComponentProps {
  title: string;
  productIds: string;
  className?: string;
}

interface Product {
  product_id: string;
  display_value: string;
  display_price: number;
  primary_image?: { url: string };
  slug: string;
}

const eva_app_token = process.env.NEXT_PUBLIC_EVA_APP_TOKEN;

export const ProductList: React.FC<ProductListComponentProps> = ({
  title,
  productIds,
  className,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { locale } = router || "en";

  useEffect(() => {});

  return (
    <div className={className}>
      <h2 className={styles.gridTitle}>{title}</h2>
      <p className={styles.productCount}>{products.length} Artikelen</p>
      <FilterBar />
      <ul className={styles.productsGrid}>
        {products.map((product) => (
          <Product
            key={product.product_id}
            id={product.product_id}
            title={product.display_value}
            slug={product.slug}
            price={product.display_price}
            imageURL={product.primary_image?.url || ""}
          />
        ))}
      </ul>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
