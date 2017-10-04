module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017
  },
  env: {
    commonjs: true,
    es6: true
  },
  extends: ['eslint:recommended'],
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-spacing': 'error',
    'array-callback-return': 'error',
    'arrow-body-style': 'off',
    'arrow-spacing': [
      'error',
      {
        after: true,
        before: true
      }
    ],
    'block-scoped-var': 'error',
    'block-spacing': [
      'error',
      'always'
    ],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    'callback-return': 'error',
    camelcase: 'error',
    'capitalized-comments': 'off',
    'comma-dangle': 'error',
    'comma-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    'comma-style': [
      'error',
      'last'
    ],
    complexity: 'error',
    'computed-property-spacing': [
      'error',
      'never'
    ],
    'consistent-return': 'off',
    curly: 'error',
    'default-case': 'off',
    'dot-location': [
      'error',
      'property'
    ],
    'dot-notation': 'error',
    'eol-last': 'error',
    eqeqeq: 'off',
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'func-names': [
      'error',
      'never'
    ],
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true
      }
    ],
    'generator-star-spacing': 'error',
    'guard-for-in': 'error',
    'handle-callback-err': 'error',
    'id-blacklist': 'error',
    'id-length': 'off',
    'id-match': 'error',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'init-declarations': 'off',
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true
      }
    ],
    'line-comment-position': 'off',
    'linebreak-style': [
      'error',
      'unix'
    ],
    'lines-around-comment': 'off',
    'lines-around-directive': 'error',
    'max-depth': 'error',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true
      }
    ],
    'max-lines': 'off',
    'max-nested-callbacks': 'error',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-ternary': 'off',
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-compare-neg-zero': 'error',
    'no-confusing-arrow': 'off',
    'no-continue': 'error',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'off',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': 'off',
    'no-floating-decimal': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-case-declarations': 'off',
    'no-inner-declarations': [
      'error',
      'functions'
    ],
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'off',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'error',
    'no-mixed-requires': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1
      }
    ],
    'no-native-reassign': 'error',
    'no-negated-condition': 'off',
    'no-negated-in-lhs': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',
    'no-restricted-modules': 'error',
    'no-restricted-properties': 'error',
    'no-restricted-syntax': 'error',
    'no-return-assign': 'off',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-sync': 'error',
    'no-tabs': 'off',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true
      }
    ],
    'no-undef-init': 'error',
    'no-underscore-dangle': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-use-before-define': 'off',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'off',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': 'error',
    'object-shorthand': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'error',
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    'padded-blocks': 'off',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'off',
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: false
      }
    ],
    'prefer-numeric-literals': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': 'off',
    quotes: [
      'error',
      'single'
    ],
    radix: 'error',
    'require-await': 'error',
    'require-jsdoc': 'off',
    'rest-spread-spacing': 'error',
    semi: 'error',
    'semi-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-infix-ops': 'off',
    'space-unary-ops': 'error',
    'spaced-comment': [
      'error',
      'always'
    ],
    'strict': 'off',
    'symbol-description': 'error',
    'template-curly-spacing': [
      'error',
      'never'
    ],
    'template-tag-spacing': 'error',
    'unicode-bom': [
      'error',
      'never'
    ],
    'valid-jsdoc': 'off',
    'vars-on-top': 'off',
    'wrap-iife': 'error',
    'wrap-regex': 'error',
    'yield-star-spacing': 'error',
    yoda: [
      'error',
      'never'
    ]
  }
};
