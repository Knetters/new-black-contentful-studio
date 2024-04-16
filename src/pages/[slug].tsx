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

    // const entry = await fetchEntryBySlug("yourContentType", "yourPageSlug");

    if (!slug) {
      return {
        notFound: true,
        // Hier als er geen experience is?
      };
    }

    const experienceEntry = await fetchBySlug({
      client,
      experienceTypeId: "scotchSodaExperiences",
      localeCode: locale || "nl",
      slug: slug,
    });

    if (!experienceEntry) {
      return {
        notFound: true,
        // Hier als er geen experience is?
      };
    }

    return {
      props: {
        // Als er een page is, return dan geen experienceEntry maar de pagina props uit contentful
        pageData: null,

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
      {pageData && <p>Niet null</p>}
    </Layout>
  );
}

export default ExperienceBuilderPage;
