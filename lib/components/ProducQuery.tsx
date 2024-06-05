import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import Product from "./Product";
import FilterBar from "./FilterBar";

interface ProductQueryComponentProps {
  query: string;
  amount: string;
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

export const ProductQuery: React.FC<ProductQueryComponentProps> = ({
  query,
  amount,
  className,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { locale } = router || "en";

  useEffect(() => {
    async function fetchProducts(desiredAmount: number) {
      let fetchedProducts: Product[] = [];
      let uniqueProducts: Product[] = [];
      let slugs = new Set();
      let currentPage = 1;

      while (uniqueProducts.length < desiredAmount) {
        try {
          const response = await fetch(
            "https://api.euw.scotch.test.eva-online.cloud/message/SearchProducts",
            {
              method: "POST",
              headers: {
                accept: "application/json",
                "accept-language": locale,
                clientname: "eva-sdk-core",
                clientversion: "2.0.0",
                "content-type": "application/json",
                "eva-api-version": "711",
                "eva-app-contextid": "9ce9eef8-0be0-44f6-a97a-197adba5c8a2",
                "eva-app-payloadid": "8c042783fce66a2c2cb5c818f0809650",
                "eva-app-token": `${eva_app_token}`,
                "eva-requested-organizationunitid": "356",
                "eva-service-name": "Core:SearchProducts",
                "eva-user-agent": "scotch-and-soda/0.1.0",
                origin: "https://www-test.scotch-soda.eu",
                priority: "u=1, i",
                referer: "https://www-test.scotch-soda.eu/",
                "sec-ch-ua":
                  '"Chromium";v="124", "Brave";v="124", "Not-A.Brand";v="99"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"macOS"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
                "sec-gpc": "1",
                "user-agent":
                  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
              },
              body: JSON.stringify({
                Filters: {},
                Query: query,
                IncludedFields: [
                  "currency_id",
                  "display_price",
                  "display_value",
                  "product_id",
                  "primary_image",
                  "slug",
                  "parent_id",
                  "product_statuses",
                  "parent_product_ids",
                  "is_new",
                  "is_new_label",
                  "logical_level_hierarchy",
                  "sizes",
                ],
                PageSize: amount,
                Options: {
                  IncludePrefigureDiscounts: true,
                },
                SearchStrategyCode: "stocksearch",
                Page: currentPage,
              }),
            }
          );

          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }

          const data = await response.json();
          console.log("Response data:", data);

          if (data.Products) {
            data.Products.forEach((product: Product) => {
              if (!slugs.has(product.slug)) {
                slugs.add(product.slug);
                uniqueProducts.push(product);
              }
            });

            fetchedProducts = [...fetchedProducts, ...data.Products];
            currentPage++;
          } else {
            throw new Error("Invalid response structure");
          }
        } catch (error) {
          console.error("Fetch error:", error);
          setError(`Failed to fetch products`);
          break;
        }

        if (
          uniqueProducts.length >= desiredAmount ||
          fetchedProducts.length >= desiredAmount * 2
        ) {
          break;
        }
      }

      setProducts(uniqueProducts.slice(0, desiredAmount));
    }

    const desiredAmount = parseInt(amount, 10);
    fetchProducts(desiredAmount);
  }, [query, locale, amount]);

  return (
    <div className={className}>
      <h2 className={styles.gridTitle}>{query}</h2>
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
            imageURL={product.primary_image?.url}
          />
        ))}
      </ul>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
