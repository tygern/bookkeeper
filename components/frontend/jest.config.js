module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["src", "test"],
  "globals": {
    "ts-jest": {
      "tsconfig": "test/tsconfig.json"
    }
  }
};
