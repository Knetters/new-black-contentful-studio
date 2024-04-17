import Layout from "../components/Layout";
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

    // Fetch page data by slug
    const pageData = await fetchEntryBySlug("page", "about");

    if (!slug) {
      return {
        notFound: true,
      };
    }

    // Fetch experience entry by slug
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
        pageData, // Pass the page data to props
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
      {pageData ? (
        <p>Niet null</p> // Render page data here if available
      ) : (
        <ExperienceRoot experience={experience} locale={locale} /> // Render experience entry
      )}
    </Layout>
  );
}

export default ExperienceBuilderPage;
