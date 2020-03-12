module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@fixtures/(.*)$': '<rootDir>/src/__test__/fixtures/$1',
  },
}
