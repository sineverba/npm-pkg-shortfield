/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  moduleNameMapper: {
    // Force module uuid to resolve with the CJS entry point, because Jest does not support package.json.exports. See https://github.com/uuidjs/uuid/issues/451
    uuid: require.resolve("uuid")
  },
  preset: "ts-jest",
  reporters: ["default", ["jest-junit", { outputDirectory: ".test_report" }]],
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
  testEnvironment: "jsdom"
};
