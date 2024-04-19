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

  pageData = await fetchEntryBySlug("page", slug, lang);

  try {
    const experienceEntry = await fetchBySlug({
      client,
      experienceTypeId: "scotchSodaExperiences",
      localeCode: lang,
      slug: slug,
    });
    experienceEntryJSON = experienceEntry
      ? JSON.stringify(experienceEntry)
      : null;
  } catch (error) {
    // Handle error if experience entry fetching fails
    console.log(`No experience found for page with slug ${slug}.`);
  }

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
      {pageData && (
        <div className={styles.contentfulContent}>
          {typeof pageData.fields.title === "string" && (
            <h1>{pageData.fields.title}</h1>
          )}
          {typeof pageData.fields.text === "string" && (
            <p>{pageData.fields.text}</p>
          )}
        </div>
      )}
      {experience && <ExperienceRoot experience={experience} locale={locale} />}
    </Layout>
  );
}

export default ExperienceBuilderPage;
