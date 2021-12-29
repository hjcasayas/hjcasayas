// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  let nextConfig = {
    ...defaultConfig,
    env: {
      DEV_CHALLENGES_IO_BASE_URL: "http://dev-challenges.hjcasayas.com",
    },
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    nextConfig = {
      ...nextConfig,
      env: {
        DEV_CHALLENGES_IO_BASE_URL: "https://dev-challenges.hjcasayas.dev",
      },
    };
  }

  return nextConfig;
};
