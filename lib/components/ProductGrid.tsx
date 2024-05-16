import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import {
  fetchAllProductEntries,
  fetchProductIds,
  fetchProducts,
} from "../../src/utils/contentful";
import Product from "./Product";
import FilterBar from "./FilterBar";

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
  className?: string;
}

export const ProductGrid: React.FC<ProductGridComponentProps> = ({
  title,
  slug,
  className,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productCount, setProductCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedProducts: Product[] = [];
        if (!slug) {
          console.log("No product grid slug found");
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
          fetchedProducts = (await fetchProducts(
            productIds,
            "en"
          )) as Product[];
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
      <FilterBar />
      <ul className={styles.productsGrid}>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            slug={product.slug}
            price={product.price}
            imageURL={product.imageURL}
          />
        ))}
      </ul>
    </div>
  );
};
