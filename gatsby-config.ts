import type { GatsbyConfig } from 'gatsby';
import enUSMessages from './lang/en-US.json';
import esMXMessages from './lang/es-MX.json';

require(`dotenv`).config({
  // NODE_ENV is automatically set to
  //   'development' when the app is launched via 'npm start' or 'npm develop'
  //   'production' when the app is launched via 'npm build'

  // Depending on the node environment, the app will then use
  // .env.production or .env.development for application
  // env variables.
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    `gatsby-plugin-pnpm`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: [
            `./node_modules/@uswds/uswds`,
            `./node_modules/@uswds/uswds/packages`,
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-i18n-l10n`,
      options: {
        // IETF BCP 47 language tag: default locale, which won't be prefixed
        defaultLocale: `en-US`,
        // string: absolute site url
        siteUrl: process.env.SITE_URL,
        prefix: `en`,
        // locales[]: all locales, which should be available
        locales: [
          {
            // IETF BCP 47 language tag of this language
            locale: `en-US`,
            // string: prefix for this language, which will be used to prefix the url, if it's not the default locale
            prefix: `en`,
            // object: mapping of given urls (by filename) to translated urls, if no mapping exists, given url will be used
            slugs: {},
            // object: this messages will be handed over to react-intl and available throughout the website
            messages: enUSMessages,
          },
          {
            // IETF BCP 47 language tag of this language
            locale: `es-MX`,
            // string: prefix for this language, which will be used to prefix the url, if it's not the default locale
            prefix: `es`,
            // object: mapping of given urls (by filename) to translated urls, if no mapping exists, given url will be used
            slugs: {},
            // object: this messages will be handed over to react-intl and available throughout the website
            messages: esMXMessages,
          },
        ],
      },
    },
  ],
  jsxRuntime: `automatic`,
};

export default config;
