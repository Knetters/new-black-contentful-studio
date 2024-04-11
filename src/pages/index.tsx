import Layout from '../components/Layout';
import React from "react";
import {
  createExperience,
  fetchBySlug,
  ExperienceRoot,
} from "@contentful/experiences-sdk-react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import { client } from "../contentfulClient";
import "../registeredComponents";
import "../registeredTokens";

export const getServerSideProps = async ({}: GetServerSidePropsContext) => {
  try {
    const experienceEntry = await fetchBySlug({
      client,
      experienceTypeId: "scotchSodaExperiences",
      localeCode: "en",
      slug: "homepage",
    });

    if (!experienceEntry) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        experienceEntryJSON: JSON.stringify(experienceEntry),
        locale: "en",
      },
    };
  } catch (e) {
    console.error(e);
  }
};

function ExperienceBuilderPage({
  experienceEntryJSON,
  locale,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const experience = createExperience(experienceEntryJSON);

  return (
    <Layout>
      <ExperienceRoot experience={experience} locale={locale} />
    </Layout>
  );
}

export default ExperienceBuilderPage;
