# eslint-config-deque

A consistent, expandable standard ESLint configuration for Deque product development.

## Installation

`npm i eslint-config-deque`

`eslint` and `eslint-plugin-react` (if using the React subconfiguration) are required as peer dependencies and should be installed as `devDependencies` in your project's root package.json.

This module contains a parent `eslint-config-deque` configuration and multiple subconfigurations which extend it. To enable the parent configuration, add `extends: ['eslint-config-deque']` to your project's `.eslintrc.json` (or other applicable ESLint config). You can add your own rules, globals, environment settings, and so on directly in your ESLint config to override the standards if necessary.

## Available Configurations

### eslint-config-deque

This is the main configuration, and the parent of any more specific subconfigurations. It defines the core ruleset, options, and general environment settings.

### eslint-config-deque/react

This subconfiguration is tuned for React projects, with React-specific rules and settings.

### eslint-config-deque/server

This subconfiguration is intended for API servers.
