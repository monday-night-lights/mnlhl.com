# mnlhl.com

The homepage for the Monday Night Lights Hockey League

## Development

The website is built with [React](https://reactjs.org/).

### Prerequisites

- Install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) /
  [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)
- Run `nvm install lts && nvm use lts` (on Windows, run the command propt as administrator)
- Run [`corepack enable`](https://nodejs.org/api/corepack.html#corepack_enabling_the_feature) to enable [Yarn](https://yarnpkg.com/) package manager

### Running the App

- Clone this repo: `git clone git@github.com:monday-night-lights/mnlhl.com.git`
- Navigate to the project directory: `cd mnlhl.com`
- Run `yarn install` to install dependencies
- Run `yarn start` to build the project for development and run a dev server
- Run `yarn deploy` to push to the `gh-pages` branch and serve the static bundle
  at https://monday-night-lights.github.io/mnlhl.com

### CI / Staging & Production Deployment

[CircleCI](https://circleci.com/) is [configured](https://github.com/monday-night-lights/mnlhl.com/blob/master/.circleci/config.yml)
to deploy the bundle to staging and production environments.
