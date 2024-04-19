import Layout from "../components/Layout";
import styles from "@/styles/Home.module.css";
import React, { useEffect } from "react";
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

export const getServerSideProps = async ({
  params,
  locale,
}: GetServerSidePropsContext<ParsedUrlQuery>) => {
  const lang: string = locale || "en";
  const { slug } = params as { slug: string };

  let pageData = null;
  let experienceEntryJSON = null;

  // Fetch page data
  pageData = await fetchEntryBySlug("page", slug, lang);

  // Fetch experience entry regardless of page data existence
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
    console.error("Error fetching experience entry:", error);
  }

  // If neither page data nor experience entry exist, return notFound
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
          <h1>{pageData.fields.title}</h1>
          <p>{pageData.fields.text}</p>
        </div>
      )}
      {experience && <ExperienceRoot experience={experience} locale={locale} />}
    </Layout>
  );
}

export default ExperienceBuilderPage;
