const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer();

module.exports = {
  env: {
    API_URL: "https://api2.buyfy.digital/",
  },
};
