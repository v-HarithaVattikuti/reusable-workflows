// This is a reusable configuration file copied from https://github.com/actions/reusable-workflows/tree/main/reusable-configurations. Please don't make changes to this file as it's the subject of an automatic update.
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import jest from 'eslint-plugin-jest'
import nodePlugin from 'eslint-plugin-node'
import prettier from 'eslint-plugin-prettier/recommended'

export default [
  {
    ignores: ['**/node_modules/**', '**/lib/**', '**/dist/**']
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      globals: {
        node: true
      }
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      node: nodePlugin
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-ignore': 'allow-with-description'
        }
      ],
      'no-console': 'error',
      yoda: 'error',
      'prefer-const': [
        'error',
        {
          destructuring: 'all'
        }
      ],
      'no-control-regex': 'off',
      'no-constant-condition': ['error', {checkLoops: false}],
      'node/no-extraneous-import': 'error'
    }
  },
  {
    files: ['**/*{test,spec}.ts'],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
      '@typescript-eslint/no-unused-vars': 'off',
      'jest/no-standalone-expect': 'off',
      'jest/no-conditional-expect': 'off',
      'no-console': 'off'
    }
  },
  prettier
]
