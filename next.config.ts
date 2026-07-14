import type { NextConfig } from "next";

// Only export as static + prefix routes when building for GitHub Pages.
// Vercel builds Next.js natively and serves from the domain root, so it
// must NOT get output: 'export' or basePath.
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages && {
    output: "export",
    basePath: "/Barwebconcept",
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;