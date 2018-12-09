module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [
          `src/pages/about-css-modules.js`,
          `src/pages/home-css-modules.js`
        ],
        cssLoaderOptions: {
          camelCase: false
        }
      }
    }
  ]
};

const path = require(`path`);
