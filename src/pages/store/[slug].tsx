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
import { Document } from "@contentful/rich-text-types";

interface ComponentInfo {
  title: string;
  content: string | Document;
  slug: string;
}

interface Store {
  title: string;
  slug: string;
}

let city: string;

export const getServerSideProps = async ({
  locale,
}: GetServerSidePropsContext) => {
  const lang: string = locale || "en";

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
    return {
      notFound: true,
    };
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
