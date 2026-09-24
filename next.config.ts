import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Keystatic's GitHub sign-in comes back to 127.0.0.1, so allow that origin
     in development. No effect on the deployed site. */
  allowedDevOrigins: ["127.0.0.1"],

  /* The contact route reads content/settings.yaml at request time to find out
     where to send the message. Next only bundles files it can see being
     imported, so the YAML has to be listed explicitly or the function starts
     with an empty disk. */
  outputFileTracingIncludes: {
    "/api/contact": ["./content/**"],
  },
};

export default nextConfig;
