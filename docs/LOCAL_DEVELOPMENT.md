## Running the project locally

#### Before you run the app locally, make sure to install all the project dependencies:

```bash
    npm install
```

#### To start the app in the development mode: run:

```bash
    npm run dev
```

## To build the typeScript app

#### To compiles the TypeScript code into JavaScript

```bash
    npm run build
```

## Start the app for production

#### To build the project and start it in production mode: run:

```bash
    npm run start
```

## Linting the Project

#### To check for any linting issues run:

```bash
    npm run lint
```

## Fixing linting issues automatically

#### To automatically fix issues that can be resolved by ESLint, run:

```bash
    npm run lint-fix
```

## Formatting code with prettier

#### To apply consistent formatting across the codebase, run:

```bash
    npm run format
```

## Linting and formatting the project

#### To run both the Prettier formatting and ESLint auto-fix in a single command, run:

```bash
    npm run lint:format
```

## Husky configuration

#### The pre-commit hook is configured to run linters (ESLint) and formatting (Prettier) before committing. If any issues are found by the linters or formatting tools, the commit will be aborted.

#### To install Husky and ensure everything is set up properly, run:

```bash
    npm install --save-dev husky
```

#### To ensure Husky hooks are correctly set up, run:

```bash
    npm run prepare
```