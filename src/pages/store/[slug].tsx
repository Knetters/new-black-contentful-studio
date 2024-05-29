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
import "../../registeredComponents";
import "../../registeredTokens";
import { fetchComponentStoreInformationBySlug } from "../../utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

interface ComponentInfo {
  title: string;
  content: string | Document;
  slug: string;
}

interface Store {
  title: string;
  slug: string;
}

let city: string;

export const getServerSideProps = async ({
  params,
  locale,
}: GetServerSidePropsContext) => {
  const lang: string = locale || "en";
  const { slug } = params as { slug: string };
  city = slug;

  try {
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

    const componentInfo = await fetchComponentStoreInformationBySlug(
      city,
      lang
    );

    let stores: Store[] = [];
    if (!componentInfo) {
      const entries = await client.getEntries({
        content_type: "componentStoreIntormation",
        locale: lang,
      });
      stores = entries.items.map((entry: any) => ({
        title: entry.fields.title,
        slug: entry.fields.slug,
      }));
    }

    return {
      props: {
        experienceEntryJSON: JSON.stringify(experienceEntry),
        locale: lang,
        componentInfo: componentInfo as ComponentInfo | null,
        stores,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      notFound: true,
    };
  }
};

function ExperienceBuilderPage({
  experienceEntryJSON,
  locale,
  componentInfo,
  stores,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const experience = createExperience(experienceEntryJSON);

  return (
    <Layout>
      {componentInfo ? (
        <>
          <h1>{componentInfo.title}</h1>
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
                <a href={`/${locale}/store/${store.slug}`}>{store.title}</a>
              </li>
            ))}
          </ul>
        </>
      )}
      <ExperienceRoot experience={experience} locale={locale} />
    </Layout>
  );
}

// export async function generateStaticParams() {
//   const stores = ['alkmaar', 'utrecht']

//   return stores.map((store) => ({
//     slug: store,
//   }))
// }

export default ExperienceBuilderPage;
