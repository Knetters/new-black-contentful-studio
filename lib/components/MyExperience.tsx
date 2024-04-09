import React from "react";
import {
  ExperienceRoot,
  useFetchBySlug,
} from "@contentful/experiences-sdk-react";
import { client } from "../../src/contentfulClient";
import "../registeredComponents";
import "../registeredTokens";

const experienceTypeId = "scotchSodaExperiences" || "";
const localeCode = "en";

const MyExperience = () => {
  const { experience, isLoading, error } = useFetchBySlug({
    client,
    slug: "homepage",
    experienceTypeId,
    localeCode,
  });

  // handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <ExperienceRoot experience={experience} locale={localeCode} />;
};

export default MyExperience;
