const path = require("path");
const glob = require("glob");

const testFiles = glob
  .sync("test/*.test.js")
  .filter((element) => element !== "test/bundle.test.js")
  .map((element) => "./" + element);

console.log(testFiles);

module.exports = {
  entry: testFiles,
  output: {
    path: path.resolve(__dirname, "."),
    filename: "bundle.test.js",
  },
  mode: "none",
};
