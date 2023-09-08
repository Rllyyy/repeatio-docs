---
sidebar_position: 8
sidebar_label: Skripte
---

# Skripte

These scripts are only for developers.

## Clone Repository

```bash
git clone https://github.com/Rllyyy/repeatio.git
```

## Install dependencies

```bash
yarn install
```

:::tip Tipp
You may need to install yarn first.
:::

## Start local server

```bash
yarn start-react
```

## Testing

We use <a href="https://docs.cypress.io/guides/overview/why-cypress">Cypress</a> and <a href="https://jestjs.io/docs/tutorial-react">Jest</a> (in combination with <a href="https://testing-library.com/docs/react-testing-library/intro">React testing library</a>) for testing. Cypress is used for e2e and component testing while Jest only supports component testing. Please you Cypress instead of Jest if you know how to use it.

**Cypress (with UI):**

```bash
yarn test:cy
```

```bash
yarn cypress open
```

**Cypress (headless):**

```bash
yarn cypress run --browser chrome
```

```bash
yarn cypress run --browser chrome --component
```

```bash
yarn cypress run --browser chrome && yarn cypress run --browser chrome --component
```

**Jest:**

```bash
yarn test
```

```bash
yarn test --watchAll
```

## Build

**Build website:**

```bash
yarn build-react
```

**Serve build locally:**

```bash
yarn serve
```
