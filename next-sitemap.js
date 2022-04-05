const cityUtils = require("./util/cities.js");
const { getAllPaths } = cityUtils;

module.exports = {
  siteUrl: process.env.URL,
  generateRobotsTxt: true,
  additionalPaths: async () => {
    return getAllPaths().map((path) => {
      return {
        loc: path,
        changefreq: "daily",
      };
    });
  },
};
