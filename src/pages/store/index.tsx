// store/index.tsx
import Layout from "../../components/Layout";
import styles from "@/styles/Home.module.css";
import React from "react";
import {
  createExperience,
  fetchBySlug,
  ExperienceRoot,
} from "@contentful/experiences-sdk-react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { client } from "../../contentfulClient";
import { fetchComponentStoreInformationBySlug } from "../../utils/contentful";

interface Store {
  title: string;
  slug: string;
}

export const getServerSideProps = async ({
  locale,
}: GetServerSidePropsContext) => {
  const lang: string = locale || "en";

  try {
    const entries = await client.getEntries({
      content_type: "componentStoreIntormation",
      locale: lang,
    });

    const stores = entries.items.map((entry: any) => ({
      title: entry.fields.title,
      slug: entry.fields.slug,
    }));

    const experienceEntry = await fetchBySlug({
      client,
      experienceTypeId: "scotchSodaExperiences",
      localeCode: lang,
      slug: "store",
    });

    if (!experienceEntry) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        stores,
        locale: lang,
        experienceEntryJSON: JSON.stringify(experienceEntry),
      },
    };
  } catch (e) {
    console.error(e);
    return {
      notFound: true,
    };
  }
};

function StoreListPage({
  stores,
  locale,
  experienceEntryJSON,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const experience = createExperience(experienceEntryJSON);

  return (
    <Layout>
      <h1 className={styles.storeListHeading}>List of stores</h1>
      <ul className={styles.storeList}>
        {stores.map((store, index) => (
          <li key={index}>
            <a href={`/${locale}/store/${store.slug}`}>{store.title}</a>
          </li>
        ))}
      </ul>
      <ExperienceRoot experience={experience} locale={locale} />
    </Layout>
  );
}

export default StoreListPage;
