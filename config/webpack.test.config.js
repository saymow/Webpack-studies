const path = require("path");
const glob = require("glob");
const { merge } = require("webpack-merge");
const CommonConfig = require("./webpack.common.config.js");

const testFiles = glob
  .sync("test/*.test.js")
  .filter((element) => element != "test/bundle.test.js")
  .map((element) => "./" + element);

module.exports = merge(CommonConfig, {
  entry: testFiles,
  output: {
    path: path.join(__dirname, "../test"),
    filename: "bundle.test.js",
  },
  devtool: "inline-source-map",
  mode: "none",
});
