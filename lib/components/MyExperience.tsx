import React from "react";
import {
  ExperienceRoot,
  useFetchBySlug,
} from "@contentful/experiences-sdk-react";
import { client } from "../../src/contentfulClient"; //Client created from the previous step
// trigger component registration
import "../registeredComponents";
// trigger design tokens registration
import "../registeredTokens";

const experienceTypeId = "scotchSodaExperiences" || ""; //Content type id for the experience
const localeCode = "en"; //Locale code for the experience (could be dynamic)

const MyExperience = () => {
  const { experience, isLoading, error } = useFetchBySlug({
    client,
    slug: "homepage", //Could be fetched from the url,
    experienceTypeId,
    localeCode,
  });

  // handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <ExperienceRoot experience={experience} locale={localeCode} />;
};

export default MyExperience;
