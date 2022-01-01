// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  /** @type {import('next').NextConfig} */
  let config = {
    ...defaultConfig,
    reactStrictMode: true,
    publicRuntimeConfig: {
      devChallengesBaseUrl: "http://dev-challenges.hjcasayas.com",
    },
  };

  if (
    phase === PHASE_DEVELOPMENT_SERVER ||
    process.env.NODE_ENV === "development"
  ) {
    config = {
      ...config,
      publicRuntimeConfig: {
        devChallengesBaseUrl: "http://dev-challenges.hjcasayas.dev",
      },
    };
  }

  return config;
};
