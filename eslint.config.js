import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  pluginJs.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: { globals: globals.node },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': ['error', { args: 'none' }],
      semi: 'error',
    },
  },
];
