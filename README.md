


# Alchemi Flash
- Name: Alchemi Flash
- Package name: alchemi-flash
- Description: Alchemi flash is a ui library kit which using tailwind
- [Blog](https://medium.com/vuejs-school/make-your-own-tailwind-ui-component-library-for-your-nuxt-project-using-storybook-part-1-4-b3d11ad48867)
- [Storybook](https://sweet-gecko-ed7a89.netlify.app/?path=/docs/introduction--docs)

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- Button
- Typography
- Card

## Quick Setup

1. Add `alcehmi-flash` dependency to your project

```bash
# Using pnpm
pnpm add -D alcehmi-flash

# Using yarn
yarn add --dev alchemi-flash

# Using npm
npm install --save-dev alchemi-flash
```

2. Add `alchemi-flash` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'alchemi-flash'
  ]
})
```

That's it! You can now use Alchemi flash in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/my-module

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/my-module

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/my-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com

