# ESLint Config

This package provides my custom rules for ESLint as an extensible shared config for React projects.

## Usage

### eslint-config-cs

The default export contains all of my ESLint rules for ECMAScript 6+ and React. It requires `eslint`.

1. Run `yarn add -D @csjs/eslint-config-cs`

2. Add `"extends": "@csjs/eslint-config-cs"` to `.eslintrc.js`.

3. Add `"lint": "eslint <source code path> --fix"` to the scripts in `package.json`.

You can make sure this module lints with itself using `yarn lint`.
