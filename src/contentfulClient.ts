import { createClient } from 'contentful';

export const client = createClient({
  // your space id
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE ?? '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_KEY ?? '',
  environment: "master",
  host: "https://preview.contentful.com",
});