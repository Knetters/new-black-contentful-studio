import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import { fetchComponentStoreInformationBySlug } from "../../src/utils/contentful";
import { client } from "../../src/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Link from "next/link";

interface StoreInformationProps {
  title: string;
  className?: string;
}

interface ComponentInfo {
  title: string;
  content: string | Document;
  slug: string;
}

interface Store {
  title: string;
  slug: string;
}

export const StoreInformation: React.FC<StoreInformationProps> = ({
  title,
  className,
}) => {
  const router = useRouter();
  const [componentInfo, setComponentInfo] = useState<ComponentInfo | null>(
    null
  );
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { locale } = router;

  // Extract the city from the URL
  const city = router.asPath.split("/").pop() || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const info = await fetchComponentStoreInformationBySlug(
          city,
          locale || "en"
        );
        setComponentInfo(info);

        if (!info) {
          const entries = await client.getEntries({
            content_type: "componentStoreIntormation",
            locale: locale || "en",
          });
          const storeList = entries.items.map((entry: any) => ({
            title: entry.fields.title,
            slug: entry.fields.slug,
          }));
          setStores(storeList);
        }
      } catch (err) {
        console.error(err);
        setError("An error occurred while fetching store information.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, locale]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.storeInfoContainer}>
      {componentInfo ? (
        <>
          <h1 className={styles.cityTitle}>{componentInfo.title}</h1>
          {typeof componentInfo.content === "string" ? (
            <div>{componentInfo.content}</div>
          ) : (
            documentToReactComponents(componentInfo.content as Document) // Render rich text content
          )}
        </>
      ) : (
        <>
          <h1 className={styles.storeListHeading}>List of stores</h1>
          <ul className={styles.storeList}>
            {stores.map((store, index) => (
              <li key={index}>
                <Link href={`/${locale}/store/${store.slug}`}>
                  {store.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
