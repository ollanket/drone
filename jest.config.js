module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: false,
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  modulePathIgnorePatterns: ['/dist/'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura']
}
