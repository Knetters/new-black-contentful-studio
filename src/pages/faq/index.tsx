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

export const getServerSideProps = async ({}: GetServerSidePropsContext) => {
  try {
    const experienceEntry = await fetchBySlug({
      client,
      experienceTypeId: "scotchSodaExperiences",
      localeCode: "en",
      slug: "faq",
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
    <main style={{ width: "100%" }}>
      <ExperienceRoot experience={experience} locale={locale} />
    </main>
  );
}

export default ExperienceBuilderPage;
