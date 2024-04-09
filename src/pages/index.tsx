import React from "react";
import {
  createExperience,
  fetchBySlug,
  ExperienceRoot,
} from "@contentful/experiences-sdk-react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import { client } from "../contentfulClient";
// trigger component registration
import "../registeredComponents";
// trigger design tokens registration
import "../registeredTokens";

// example experience content type ID

export const getServerSideProps = async ({}: GetServerSidePropsContext) => {
  try {
    const experienceEntry = await fetchBySlug({
      client,
      experienceTypeId: "scotchSodaExperiences",
      localeCode: "en",
      slug: "homepage",
    });
    console.log("🚀 ~ getServerSideProps ~ experienceEntry:", experienceEntry);

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
    <main style={{ width: "100%" }}>
      <ExperienceRoot experience={experience} locale={locale} />
    </main>
  );
}

export default ExperienceBuilderPage;
