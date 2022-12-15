import type { GatsbyConfig } from 'gatsby';

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
  ],
  jsxRuntime: `automatic`,
};

export default config;
