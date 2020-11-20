const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer();

module.exports = {
  env: {
    API_URL: "http://localhost:5000",
  },
};
