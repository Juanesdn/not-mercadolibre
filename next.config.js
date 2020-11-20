const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer();

module.exports = {
  env: {
    API_URL: "http://204.236.198.61:5000",
  },
};
