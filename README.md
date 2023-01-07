<p align="center">
  <img src="https://user-images.githubusercontent.com/26466516/169722691-77a6ca86-df54-4a0e-b952-48c3f3ed7526.png" alt="Gatsby TypeScript Starter">
</p>

<br />

<div align="center"><strong>Opinionated TypeScript starter for Gatsby</strong></div>
<div align="center">A TypeScript starter for Gatsby that works with Trussworks components, USWDS SASS and i18n</div>

<br />

## Features

- ⚡️ Gatsby 5
- ⚛️ React 18
- ⛑ TypeScript
- 🐐 Tests — Vitest and Testing Library out of the box
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 🚓 Commitlint — To make sure your commit messages follow the convention
- 🖌 Renovate — To keep your dependencies up to date (needs to be set up)
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files (under development)
- 👷 PR Workflow — Run Type Check & Linters on Pull Requests
- ⚙️ EditorConfig - Consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `@` prefix

## Quick Start

The best way to start is to clone this repo:

```
git clone https://github.com/usds/gastby-uswds-ts-starter.git your-project-name
```

### Development

To start the project locally:

1. Git clone the starter repo (above) in a terminal
2. run `cd your-project-name`
3. If you don't have node 18, install and verify that `node -v` return 18.x. You can use `nvm` or `asdf`
4. run `nvm use 18`
5. Ensure that `pnpm` and `gatsby-cli` are globally installed:

```
$ npm list -g --depth=0
/Users/username/.nvm/versions/node/v18.12.1/lib
├── corepack@0.14.2
├── gatsby-cli@5.2.0
├── npm@8.19.2
└── pnpm@7.18.2
```
6. run `pnpm install`
7. run `pnpm clean && pnpm start`

Open `http://localhost:8000` with your browser to see the result.

## Documentation

### Requirements

- Node.js >= 18
- pnpm 7

### Directory Structure

- [`__helpers__`](./__helpers__/) — Helpers files for testing configuration.<br>
- [`__mocks__`](./__mocks__/) — Mocks for testing.<br>
- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `pnpm start` — Starts the application in development mode at `http://localhost:8000`.
- `pnpm build` — Compile your application and make it ready for deployment.
- `pnpm serve` — Serve the production build of your site
- `pnpm clean` — Wipe out the cache (`.cache` folder).
- `pnpm type-check` — Validate code using TypeScript compiler.
- `pnpm lint` — Runs ESLint for all files in the `src` directory.
- `pnpm format` — Runs Prettier for all files in the `src` directory.
- `pnpm test` — Run tests with Vitest.
- `pnpm test:watch` — Run tests on watch mode.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/Button';

// To import images or other files from the static folder
import avatar from '@/static/avatar.png';
```

## USDS Specific
- works with [trusswork](https://trussworks.github.io/react-uswds/) components
- can use [USWDS tokens](https://designsystem.digital.gov/design-tokens/) as mixins in sass modules (at component level)
- works with i18n using [format.js (react-intl)](https://formatjs.io/docs/react-intl/api)
- has a generator script to quickly create components

### Before each commit run the following:
- `pnmp run type-check`
- `pnmp run lint`
- `pnmp run format`
- `pnmp run test`
- `pnmp run intl:extract`

### i18n

The steps involved with creating i18n content is as follows:

1. Use `react-intl` as demonstrated in various pages and/or components.
2. When new content is added, run `pnpm intl:extract`. This will update the json object in `lang/en-US-extract.json`.
3. Run `pnpm intl:createEnJson`. This will modify the extracted JSON file into an AST that the library expects and remove console errors.
4. Translate the `en-US.json` file to an `es-MX.json`. Each key from the `en-US.json` file should have a spanish value in `es-MX.json`.

### Deployment
Currently this repo is using Github actions (see [.github/workflows](https://github.com/usds/gatsby-uswds-ts-starter/tree/main/.github/workflows) in the root directory) for deployment to AWS with the support of Geoplatform.

These actions will
1. creates a staging link (see [deploy-staging.yml](https://github.com/usds/gatsby-uswds-ts-starter/blob/main/.github/workflows/deploy-staging.yml)) as a comment in every PR made against `main` that passes all checks (type-check, linting, testing, format, commit messages)
2. update the production folder on AWS
3. remove any artifacts of the PR when the PR is closed (see [close-pr.yml](https://github.com/usds/gatsby-uswds-ts-starter/blob/main/.github/workflows/close-pr.yml))

In order for these actions to work as is, the following [secrets need to be added](https://docs.github.com/en/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces) in your repo:
1. AWS_ACCESS_KEY_ID
2. AWS_SECRET_ACCESS_KEY
3. STAGE_SITE_URL

The AWS_ACCESS_KEY_ID and the AWS_SECRET_ACCESS_KEY will allow for programmatic (via CLI) access to your AWS resources. See the programmatic access section on [here](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.htm).

The STAGE_SITE_URL should point to the name of your S3 bucket or CDN.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.


## Credits


<div>
  Original repo created by <a href="https://twitter.com/jpedroschmitz">João Pedro</a> with the help of many <a href="https://github.com/jpedroschmitz/gatsby-starter-ts/graphs/contributors">wonderful contributors</a>. Shout out from USDS!
</div>