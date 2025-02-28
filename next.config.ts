import type { NextConfig } from "next";
import type { WebpackConfigContext } from "next/dist/server/config-shared";
import type { Configuration } from "webpack";
import removeImports from "next-remove-imports";

const removeImportsFun: (config: NextConfig) => NextConfig = removeImports({
  // test: /node_modules([\s\S]*?)\.(tsx|ts|js|mjs|jsx)$/,
  // matchImports: "\\.(less|css|scss|sass|styl)$"
});

const nextConfig: NextConfig = {
  env: {
    MONGODB_URL: process.env.MONGODB_URL,
  },
  experimental: {
    forceSwcTransforms: true,
  },
  webpack: (
    config: Configuration,
    { dev, isServer }: WebpackConfigContext
  ): Configuration => {
    if (!dev && !isServer) {
      config.cache = true;
    }
    return config;
  },
};

export default removeImportsFun(nextConfig);
