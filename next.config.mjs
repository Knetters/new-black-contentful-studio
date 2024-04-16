/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net"],
  },
  i18n: {
    locales: ["nl-EN", "nl-NL"],
    defaultLocale: "nl-NL",
  },
};

export default nextConfig;
