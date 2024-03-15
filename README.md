# Monorepo with typescript, turbo, react, vite, storybook, jest, estlint and prettier

## Getting started

1. Install node-version or nvm and ensure to use the pinned version - or otherwise install the correct Node Version (rever to `.node-version`)
2. Enable corepack `corepack enable`
3. Ensure the corret yarn version using `yarn set version <desired-version>`. Refer to `package.json` for the version to use.
4. Run `yarn` in the repo root

Now you should be able to run the apps and the varios commands, e.g., `yarn lint` to perform static code analysis. Refer to `package.json` in the root for other repo-wide scripts.

## Tools and relevant reading

- [TurboRepo](https://turbo.build/repo/docs)
- [Vite](https://vitejs.dev/)
  - [https://earthly.dev/blog/yarn-vite-monorepo/](https://earthly.dev/blog/yarn-vite-monorepo/)
  - [https://medium.com/@srinivasthedeveloper/creating-a-cool-react-component-library-with-vite-and-typescript-1179003a3e0f](https://medium.com/@srinivasthedeveloper/creating-a-cool-react-component-library-with-vite-and-typescript-1179003a3e0f)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/) - _TBC..._
- [Yarn workspaces](https://yarnpkg.com/features/workspaces)

## Targetting specific packages

**Using Yarn workspaces (recommended for installing new npm packages)**

```bash
yarn workspace <workspace-name> add [--dev] <package-name>
```

- `<workspace-name>` is according to each package's `package.json` file
- `<package-name>` is what you wantt to install

**Using turborepo (recommended for ALL other tasks)**

> **Note:** By default, Turbo will skip any package that does not have the command the requested command.

```bash
yarn <command> --filter <workspace-name>
```

## TODO - known caveats

1. Add `jest` with example unit tests
2. Add commit hooks - using husky or native?
3. Hot reload of `apps` is not working when updating one of the `packages`.
   - It could be that this is an _"issue"_ (or even intentional behaviour) of `vite` at this time.
   - Currernt work around is to reference source files directly. It has the advantage that we can avoid having to reinstall dependencies when they change. But we still have to restart dev mode using `yarn dev --force`.
