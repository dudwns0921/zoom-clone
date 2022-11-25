module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./client/tsconfig.json'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react'],
  rules: {},
};
