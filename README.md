# algorithms

A personal collection of algorithm and data-structure implementations, each paired with a Jest test.

## Requirements

- Node.js `>=20` (see [.nvmrc](.nvmrc) for the pinned development version; run `nvm use`)

## Setup

```sh
npm install
```

## Scripts

| Script | Description |
| --- | --- |
| `npm test` | Run the full Jest suite |
| `npm run test:watch` | Run Jest in watch mode |
| `npm run test:coverage` | Run the suite with a coverage report |
| `npm run typecheck` | Type-check the project with `tsc --noEmit` |
| `npm run lint` | Lint with ESLint |
| `npm run lint:fix` | Lint and auto-fix |
| `npm run exec -- <file>` | Run a single file with `tsx` |
| `npm run dev -- <file>` | Run a file with `tsx` in watch mode |

## Layout

- `src/` — implementations, grouped into topic folders (`dataStructures/`, `dynamicProgramming/`, `treeProblems/`, `linkedListProblems/`, `helperFunctions/`) alongside standalone solutions.
- `tests/` — `*.spec.ts` / `*.spec.js` files mirroring the implementations.

## Toolchain

- **TypeScript** in native ESM mode (`"type": "module"`), with `bundler` module resolution. Mixed `.ts`/`.js` sources are allowed.
- **Jest** with `@swc/jest` for fast, transpile-only test runs.
- **ESLint 9** flat config ([eslint.config.mjs](eslint.config.mjs)) and **Prettier** for formatting.

## Conventions

- Relative imports must include a file extension — always write `.js`, even when importing a `.ts` file. Native Node ESM requires explicit extensions; TypeScript and `tsx` map the `.js` specifier back to the `.ts` source.
