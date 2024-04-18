import Layout from "../components/Layout";
import styles from "@/styles/Home.module.css";
import React from "react";
import { fetchEntryBySlug } from "@/utils/contentful";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import {
  createExperience,
  fetchBySlug,
  ExperienceRoot,
} from "@contentful/experiences-sdk-react";
import { client } from "../contentfulClient";

export const getServerSideProps = async ({
  params,
  locale,
}: GetServerSidePropsContext<ParsedUrlQuery>) => {
  const { slug } = params as { slug: string };
  let pageData = null;

  try {
    pageData = await fetchEntryBySlug("page", slug);
  } catch (error) {
    console.error("Error fetching page data:", error);
    return {
      notFound: true,
    };
  }

  if (!pageData) {
    try {
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
          pageData: null,
          experienceEntryJSON: JSON.stringify(experienceEntry),
          locale: "en",
        },
      };
    } catch (error) {
      console.error("Error fetching experience data:", error);
      return {
        notFound: true,
      };
    }
  }

  return {
    props: {
      pageData,
      locale: "en",
    },
  };
};

function ExperienceBuilderPage({
  pageData,
  experienceEntryJSON,
  locale,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (pageData) {
    return (
      <>
        <Layout>
          <div className={styles.contentfulContent}>
            <h1>{pageData.fields.title}</h1>
          </div>
        </Layout>
      </>
    );
  }

  const experience = createExperience(experienceEntryJSON);

  if (!experience) {
    console.log("Geen experience");
  }

  return (
    <>
      <Layout>
        <ExperienceRoot experience={experience} locale={locale} />
      </Layout>
    </>
  );
}

export default ExperienceBuilderPage;
