import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, Paragraph } from "@contentful/f36-components";

interface Product {
  product_id: string;
  display_value: string;
  display_price: string;
  primary_image: string;
  slug: string;
}

const LargeProductGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    const payload = {
      Filters: {},
      Query: "shirt",
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
      PageSize: 100,
      Options: { IncludePrefigureDiscounts: true },
      SearchStrategyCode: "stocksearch",
    };

    console.log("Request Payload:", payload);

    try {
      const response = await axios.post(
        "https://api.euw.scotch.test.eva-online.cloud/message/SearchProducts",
        payload,
        {
          headers: {
            accept: "application/json",
            "accept-language": "nl-NL",
            clientname: "eva-sdk-core",
            clientversion: "2.0.0",
            "content-type": "application/json",
            "eva-api-version": "711",
            "eva-app-contextid": "9ce9eef8-0be0-44f6-a97a-197adba5c8a2",
            "eva-app-payloadid": "8c042783fce66a2c2cb5c818f0809650",
            "eva-app-token": "5gy0yb9uochnye2ng95zdn6h7kbaadqy",
            "eva-requested-organizationunitid": "356",
            "eva-service-name": "Core:SearchProducts",
          },
        }
      );

      console.log("Response Data:", response.data);

      if (response.data.products) {
        setProducts(response.data.products);
      } else {
        setError("No products found");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {error && <Paragraph>{error}</Paragraph>}
      <Grid columns="4">
        {products.map((product) => (
          <Card key={product.product_id}>
            <img src={product.primary_image} alt={product.display_value} />
            <Paragraph>{product.display_value}</Paragraph>
            <Paragraph>{product.display_price}</Paragraph>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default LargeProductGrid;
