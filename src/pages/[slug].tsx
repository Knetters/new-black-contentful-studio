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
  const pageData = await fetchEntryBySlug("page", slug, lang);

  if (!pageData) {
    try {
      const experienceEntry = await fetchBySlug({
        client,
        experienceTypeId: "scotchSodaExperiences",
        localeCode: lang,
        slug: slug,
      });

      if (!experienceEntry) {
        return {
          notFound: true,
        };
      }

      return {
        props: {
          pageData: null,
          experienceEntryJSON: JSON.stringify(experienceEntry),
          locale: lang,
        },
      };
    } catch (e) {
      console.error("Error fetching data:", e);

      return {
        notFound: true,
      };
    }
  } else {
    return {
      props: {
        pageData,
        locale: lang,
      },
    };
  }
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
  console.log(lang);
  console.log(pageData);
  return (
    <Layout>
      {experience && <ExperienceRoot experience={experience} locale={locale} />}
      {pageData && (
        <div className={styles.contentfulContent}>
          <h1>{pageData.fields.title}</h1>
          <p>{pageData.fields.text}</p>
        </div>
      )}
    </Layout>
  );
}

export default ExperienceBuilderPage;
