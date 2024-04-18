/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net"],
  },
  i18n: {
    locales: ["en", "nl-NL", "fr-FR"],
    defaultLocale: "nl-NL",
  },
};

export default nextConfig;
