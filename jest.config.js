module.exports = {
    roots: ["<rootDir>/src"],
    testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    moduleFileExtensions: ["js", "jsx"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    testEnvironment: "jsdom",
  };