export default {
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testEnvironment: "node",
  testMatch: ["**/packages/*/test/**/*.js"]
};
