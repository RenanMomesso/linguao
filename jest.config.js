module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // transformIgnorePatterns: [
  //   "node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)",
  // ],
  testPathIgnorePatterns: ["/node_modules/", "/e2e/"],
  moduleNameMapper: {
    "^components/(.*)$": "<rootDir>/src/components/$1",
  },
  testMatch: ["<rootDir>/__tests__/*.js", "<rootDir>/src/**/*.(test|spec).(ts|tsx)"],
};
