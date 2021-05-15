module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['prettier', 'plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'arrow-parens': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'object-curly-newline': 'off',
    'arrow-body-style': 'off',
  },
};
