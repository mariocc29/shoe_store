const jestConfig = {
  transform: {
    "\\.(scss|svg)$": "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest",
  },

  setupFilesAfterEnv: [
    "@testing-library/react",
    "@testing-library/jest-dom"
  ],

  testEnvironment: 'jsdom',

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
}

export default jestConfig