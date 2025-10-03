/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src'],
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  collectCoverage: false,
  coverageDirectory: 'coverage/angular-20-foundations',
  coverageReporters: ['html', 'text-summary', 'json-summary', 'lcov'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      }
    ]
  },
  transformIgnorePatterns: [
    'node_modules/(?!.*\\.mjs$|rxjs)'
  ],
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    errorOnDeprecated: true,
  }
};