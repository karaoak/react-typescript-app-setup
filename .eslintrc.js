module.exports = {
  extends: [
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
    'import/no-default-export': 'warn',
    'no-console': 'warn',
  },
};
