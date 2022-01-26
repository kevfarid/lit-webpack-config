module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true,
  },
  extends: ['eslint:recommended', 'plugin:lit/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['lit', 'prettier'],
  rules: {
    'no-underscore-dangle': 'off',
    'import/newline-after-import': 'error',
    'no-shadow': 'off',
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'arrow-body-style': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
  overrides: [
    {
      files: ['.index.js'],
      rules: {
        'no-restricted-exports': 'off',
      },
    },
  ],
}
