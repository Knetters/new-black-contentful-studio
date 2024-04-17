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

export const getServerSideProps = async ({
  params,
  locale,
}: GetServerSidePropsContext<ParsedUrlQuery>) => {
  try {
    const { slug } = params as { slug: string };
    const pageData = await fetchEntryBySlug("page", slug);

    const experienceEntry = await fetchBySlug({
      client,
      experienceTypeId: "scotchSodaExperiences",
      localeCode: locale || "nl",
      slug: slug,
    });

    if (!experienceEntry) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        pageData,
        experienceEntryJSON: JSON.stringify(experienceEntry),
        locale: "en",
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
  pageData,
  experienceEntryJSON,
  locale,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const experience = createExperience(experienceEntryJSON);

  return (
    <Layout>
      {!pageData && <ExperienceRoot experience={experience} locale={locale} />}
      {pageData && (
        <div className={styles.contentfulContent}>
          <h1>{pageData.fields.title}</h1>
        </div>
      )}
    </Layout>
  );
}

export default ExperienceBuilderPage;
