const _ = require('lodash');
const merger = require('./merger');
const parent = require('./index');

module.exports = _.mergeWith(parent, {
  extends: ['plugin:react/recommended'],
  env: {
    node: true
  },
  globals: {
    window: true,
    document: true,
    simulant: true,
    Event: true,
    CustomEvent: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-tag-spacing': 2,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-no-literals': 2,
    'react/jsx-curly-spacing': { 'when': 'never', 'children': true }
  }
}, merger);
