module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom", // Ensure this is set correctly
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.css$": "jest-css-modules-transform",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
