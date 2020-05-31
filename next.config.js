const withCSS = require("@zeit/next-css");
const withMdxFm = require("next-mdx-frontmatter")();
const withImages = require("next-images");
const path = require("path");
require("dotenv").config();

const env = {};

if (process.env.NODE_ENV === "development") {
  env.FIREBASE_CREDENTIALS = process.env.FIREBASE_CREDENTIALS;
  env.PAYJP_SECRET = process.env.PAYJP_SECRET;
  env.PAYJP_PUBLIC = process.env.PAYJP_PUBLIC;
}

module.exports = withImages(
  withMdxFm(
    withCSS({
      env,
      exportTrailingSlash: true,
      webpack: config => {
        // eslint-disable-next-line
        config.resolve.alias = {
          ...config.resolve.alias,
          "@": path.resolve(__dirname)
        };
        return config;
      }
    })
  )
);
