import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  // Next.js 16: plugin sets alias under experimental.turbo (ignored). Set it here so getMessages/getTranslations work.
  turbopack: {
    resolveAlias: {
      "next-intl/config": "./src/i18n/request.ts",
    },
  },
};

export default withNextIntl(nextConfig);
