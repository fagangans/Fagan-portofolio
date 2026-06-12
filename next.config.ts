import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Next.js 15.5+ App Router aliases 'react' to next/dist/compiled/react,
      // which removes __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.
      // react-reconciler@0.27.0 (used by @react-three/fiber v8) requires this
      // internal at initialization time. This plugin overrides only react-reconciler's
      // React import to use the full CJS build that has __SECRET_INTERNALS.
      const webpack = require("webpack");
      // Build absolute path to CJS file, bypassing package exports map restriction
      const reactDir = path.dirname(require.resolve("react/package.json"));
      const fullReact = path.join(reactDir, "cjs", "react.production.min.js");
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /^react$/,
          (resource: { contextInfo: { issuer?: string }; request: string }) => {
            if (resource.contextInfo.issuer?.includes("react-reconciler")) {
              resource.request = fullReact;
            }
          }
        )
      );
    }
    return config;
  },
};

export default nextConfig;
