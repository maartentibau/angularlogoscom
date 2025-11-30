const angular = require('angular-eslint');
const eslint = require('@eslint/js');
const vitest = require('@vitest/eslint-plugin');
const simpleSort = require('eslint-plugin-simple-import-sort');
const typescript = require('typescript-eslint');
const perfectionist = require('eslint-plugin-perfectionist');

const ANGULAR_ESLINT_RULES = {
  '@angular-eslint/directive-selector': [
    'error',
    {
      type: 'attribute',
      prefix: 'wgkUi',
      style: 'camelCase'
    }
  ],
  '@angular-eslint/component-selector': [
    'error',
    {
      type: 'element',
      prefix: ['app', 'wgk-ui'],
      style: 'kebab-case'
    }
  ],
  '@angular-eslint/no-input-rename': 'off',
  // TODO: remove when https://gitlab.wgkwvl.be/nurs-e/monorepo/-/issues/23482 is done
  '@angular-eslint/prefer-inject': 'off'
};

const TYPESCRIPT_ESLINT_RULES = {
  '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'angle-bracket' }],
  '@typescript-eslint/consistent-type-definitions': 'off',
  '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'no-type-imports' }],
  '@typescript-eslint/consistent-generic-constructors': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-redundant-type-constituents': 'error',
  '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
  '@typescript-eslint/no-unnecessary-template-expression': 'error',
  '@typescript-eslint/no-unnecessary-type-arguments': 'off',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      ignoreRestSiblings: true,
      argsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_'
    }
  ],
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-readonly': 'error'
};

const SIMPLE_SORT_RULES = {
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error'
};

const PERFECTIONIST__ESLINT_RULES = {
  'perfectionist/sort-classes': [
    'error',
    {
      type: 'unsorted',
      groups: [
        'angular-inject',
        'angular-input-required',
        'angular-input',
        'angular-model-required',
        'angular-model',
        'angular-output',
        'private-property',
        'protected-property',
        'static-property',
        'public-property',
        'angular-content-child-required',
        'angular-content-child',
        'angular-content-children-required',
        'angular-content-children',
        'angular-view-child-required',
        'angular-view-child',
        'angular-view-children-required',
        'angular-view-children',
        'angular-signal',
        'angular-computed',
        'angular-linked-signal',
        ['get-method', 'set-method'],
        'constructor',
        'static-method',
        'public-static-method',
        'method',
        'public-method',
        'protected-static-method',
        'protected-method',
        'private-static-method',
        'private-method'
      ],
      customGroups: [
        {
          groupName: 'angular-input',
          selector: 'property',
          elementValuePattern: 's?input(?:<[\\s\\S]*?>)?\\([\\s\\S]*?\\)'
        },
        {
          groupName: 'angular-input-required',
          selector: 'property',
          elementValuePattern: 's?input\\.required(?:<[\\s\\S]*?>)?\\([\\s\\S]*?\\)'
        },
        {
          groupName: 'angular-model',
          selector: 'property',
          elementValuePattern: 's?model(?:<[\\s\\S]*?>)?\\([\\s\\S]*?\\)'
        },
        {
          groupName: 'angular-model-required',
          selector: 'property',
          elementValuePattern: 's?model\\.required(?:<[\\s\\S]*?>)?\\([\\s\\S]*?\\)'
        },
        {
          groupName: 'angular-output',
          selector: 'property',
          elementValuePattern: 's?output(?:<[\\s\\S]*?>)?\\([\\s\\S]*?\\)'
        },
        {
          groupName: 'angular-inject',
          selector: 'property',
          elementValuePattern: 's?inject(?:<[\\s\\S]*?>)?\\([\\s\\S]*?\\)'
        },
        {
          groupName: 'angular-signal',
          selector: 'property',
          elementValuePattern: 's?signal(?:<[\\s\\S]*?>)?\\([\\s\\S]*?\\)'
        },
        {
          groupName: 'angular-content-child',
          selector: 'property',
          elementValuePattern: 's?viewChild(?:<[\\s\\S]*?>)?\\([\\s\\S]*?\\)'
        },
        {
          groupName: 'angular-content-child-required',
          selector: 'property',
          elementValuePattern: 's?viewChild\\.required(?:<[\\s\\S]*?>)?\\([\\s\\S]*?\\)'
        },
        {
          groupName: 'angular-content-children',
          selector: 'property',
          elementValuePattern: 's?viewChildren(?:<[\\s\\S]*?>)?\\([\\s\\S]*?\\)'
        },
        {
          groupName: 'angular-content-children-required',
          selector: 'property',
          elementValuePattern: 's?viewChildren\\.required(?:<[\\s\\S]*?>)?\\([\\s\\S]*?\\)'
        },
        {
          groupName: 'angular-view-child',
          selector: 'property',
          elementValuePattern: 's?viewChild(?:<[\\s\\S]*?>)?\\([\\s\\S]*?\\)'
        },
        {
          groupName: 'angular-view-child-required',
          selector: 'property',
          elementValuePattern: 's?viewChild\\.required(?:<[\\s\\S]*?>)?\\([\\s\\S]*?\\)'
        },
        {
          groupName: 'angular-view-children',
          selector: 'property',
          elementValuePattern: 's?viewChildren(?:<[\\s\\S]*?>)?\\([\\s\\S]*?\\)'
        },
        {
          groupName: 'angular-view-children-required',
          selector: 'property',
          elementValuePattern: 's?viewChildren\\.required(?:<[\\s\\S]*?>)?\\([\\s\\S]*?\\)'
        },
        {
          groupName: 'angular-computed',
          selector: 'property',
          elementValuePattern: 's?computed(?:<[\\s\\S]*?>)?\\([\\s\\S]*?\\)'
        },
        {
          groupName: 'angular-linked-signal',
          selector: 'property',
          elementValuePattern: 's?linkedSignal(?:<[\\s\\S]*?>)?\\([\\s\\S]*?\\)'
        }
      ]
    }
  ],
  'perfectionist/sort-variable-declarations': 'off',
  'perfectionist/sort-intersection-types': 'off',
  'perfectionist/sort-heritage-clauses': 'off',
  'perfectionist/sort-array-includes': 'off',
  'perfectionist/sort-named-imports': 'off',
  'perfectionist/sort-named-exports': 'off',
  'perfectionist/sort-object-types': 'off',
  'perfectionist/sort-union-types': 'off',
  'perfectionist/sort-switch-case': 'off',
  'perfectionist/sort-interfaces': 'off',
  'perfectionist/sort-decorators': 'off',
  'perfectionist/sort-jsx-props': 'off',
  'perfectionist/sort-modules': 'off',
  'perfectionist/sort-imports': 'off',
  'perfectionist/sort-exports': 'off',
  'perfectionist/sort-objects': 'off',
  'perfectionist/sort-enums': 'off',
  'perfectionist/sort-sets': 'off',
  'perfectionist/sort-maps': 'off'
};

module.exports = typescript.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      perfectionist.configs['recommended-alphabetical'],
      ...typescript.configs.recommended,
      ...typescript.configs.stylistic,
      ...angular.configs.tsRecommended
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname
      }
    },
    plugins: { 'simple-import-sort': simpleSort },
    processor: angular.processInlineTemplates,
    rules: {
      ...ANGULAR_ESLINT_RULES,
      ...TYPESCRIPT_ESLINT_RULES,
      ...SIMPLE_SORT_RULES,
      ...PERFECTIONIST__ESLINT_RULES
    }
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateAll],
    rules: {
      '@angular-eslint/template/click-events-have-key-events': 'off',
      '@angular-eslint/template/i18n': 'off',
      '@angular-eslint/template/interactive-supports-focus': 'off',
      '@angular-eslint/template/prefer-ngsrc': 'off',
      /**
       * TODO: Re-active as soon as signals are supported.
       * See Github issue for the current status: https://github.com/angular-eslint/angular-eslint/issues/1380.
       */
      '@angular-eslint/template/no-call-expression': 'off',
      '@angular-eslint/template/no-inline-styles': ['warn', { allowBindToStyle: true }],
      '@angular-eslint/template/conditional-complexity': 'warn'
    }
  },
  {
    files: ['**/*.spec.ts'],
    extends: [vitest.configs.recommended],
    rules: {}
  },
  {
    ignores: [
      '.angular',
      '.cache',
      '.idea',
      '.npm',
      '.vscode',
      'build',
      'cache',
      'coverage',
      'dist',
      'docs',
      'patches',
      'node_modules',
      'package',
      '**/CHANGELOG.md',
      'src/index.html'
    ]
  }
);
