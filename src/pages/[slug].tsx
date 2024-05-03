import Layout from "../components/Layout";
import styles from "@/styles/Home.module.css";
import React from "react";
import {
  createExperience,
  fetchBySlug,
  ExperienceRoot,
} from "@contentful/experiences-sdk-react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";

import { client } from "../contentfulClient";
import "../registeredComponents";
import "../registeredTokens";
import { fetchEntryBySlug } from "@/utils/contentful";

// Save the original console.error method
const originalError = console.error;

// Override console.error to suppress useLayoutEffect warnings
console.error = (...args) => {
  if (
    args &&
    args[0] &&
    typeof args[0] === "string" &&
    args[0].includes("useLayoutEffect")
  ) {
    return;
  }
  originalError.apply(console, args);
};

export const getServerSideProps = async ({
  params,
  locale,
}: GetServerSidePropsContext<ParsedUrlQuery>) => {
  const lang: string = locale || "en";
  const { slug } = params as { slug: string };

  let pageData = null;
  let experienceEntryJSON = null;

  // First try fetching using langSlug
  let langSlug = `${slug}-${lang.substring(0, 2)}`.toLowerCase();

  try {
    const experienceEntry = await fetchBySlug({
      client,
      experienceTypeId: "scotchSodaExperiences",
      localeCode: lang,
      slug: `${langSlug}`,
    });
    experienceEntryJSON = experienceEntry
      ? JSON.stringify(experienceEntry)
      : null;
  } catch (error) {
    // If no experience found for langSlug, fallback to normal slug
    console.log(
      `No experience found for page with slug ${langSlug}. Trying without lang slug.`
    );
    try {
      const experienceEntry = await fetchBySlug({
        client,
        experienceTypeId: "scotchSodaExperiences",
        localeCode: lang,
        slug: `${slug}`,
      });
      experienceEntryJSON = experienceEntry
        ? JSON.stringify(experienceEntry)
        : null;
    } catch (error) {
      console.log(`No experience found for page with slug ${slug}.`);
    }
  }

  // Fetch page data
  pageData = await fetchEntryBySlug("page", slug, lang);

  if (!pageData && !experienceEntryJSON) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageData: pageData ? pageData : null,
      experienceEntryJSON: experienceEntryJSON,
      locale: lang,
    },
  };
};

function ExperienceBuilderPage({
  pageData,
  experienceEntryJSON,
  locale,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const lang: string = locale || "en";

  let experience = null;
  if (experienceEntryJSON) {
    experience = createExperience(experienceEntryJSON);
  }

  return (
    <Layout>
      {experience && <ExperienceRoot experience={experience} locale={locale} />}
      {pageData && (
        <div className={styles.contentfulContent}>
          {typeof pageData.fields.title === "string" && (
            <h1>{pageData.fields.title}</h1>
          )}
          {typeof pageData.fields.text === "string" && (
            <p>{pageData.fields.text}</p>
          )}
          {/* {pageData.fields.modules} */}
        </div>
      )}
    </Layout>
  );
}

export default ExperienceBuilderPage;
