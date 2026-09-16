import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Keystatic's GitHub sign-in comes back to 127.0.0.1, so allow that origin
     in development. No effect on the deployed site. */
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
