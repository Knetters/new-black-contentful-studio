import Layout from "../../components/Layout";
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

    return {
      props: {
        experienceEntryJSON: JSON.stringify(experienceEntry),
        locale: lang,
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
      <div>City: {city}</div>
      <ExperienceRoot experience={experience} locale={locale} />
    </Layout>
  );
}

export default ExperienceBuilderPage;
