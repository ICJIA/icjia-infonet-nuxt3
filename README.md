[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# InfoNet

Infonet blurb here

## Site

TBD

## Install

```bash
git clone https://github.com/ICJIA/icjia-infonet-nuxt3.git
cd icjia-infonet-nuxt3
cp .env.sample .env
yarn install
nvm use
```

> Note: If you don't have `nvm` installed, you can install it with `brew install nvm` or `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`

## Start development server

Start the development server on http://localhost:8000

```bash
yarn dev
```

## Preview

```bash
yarn preview
```

## Production

Build the application for production:

```bash
yarn generate
```

## Manually run build scripts for remote API

```bash
yarn scripts
```

## Manually run build scripts for local API

```bash
yarn scripts:local
```

_Netlify will automatically deploy the live site when changes are pushed to the master branch._
