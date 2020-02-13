module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-unresolved': 'off',
    'no-var': 2,
    // 'prefer-const': 2,
    // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    // TODO: check disabled rules
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': 0,
    'import/no-cycle': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'array-callback-return': 0,
    'consistent-return': 0,
    'global-require': 0,
    'prefer-destructuring': 0,
    'no-restricted-globals': 0,
    'no-plusplus': 0,
    'no-unused-vars': 0,
    'vue/no-template-shadow': 0,
    'no-underscore-dangle': 0,
    camelcase: 0,
    radix: 0,
    'no-alert': 0,
    'no-shadow': 0,

    'no-bitwise': 0,
    'vue/valid-template-root': 0,
    'vue/require-prop-types': 0,
    'func-names': 0,
    'prefer-const': 0,
    'no-multi-assign': 0,
    'no-undef': 0,
    'default-case': 0,
    'no-nested-ternary': 0,
    'no-prototype-builtins': 0,
    'no-restricted-syntax': 0,
    'no-continue': 0,
    'prefer-template': 0,
    'guard-for-in': 0,
    'object-shorthand': 0,
    'vue/no-unused-components': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/return-in-computed-property': 0,
    'vue/require-prop-type-constructor': 0,
    'vue/require-v-for-key': 0,
    'vue/valid-v-for': 0,
    'no-lonely-if': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
