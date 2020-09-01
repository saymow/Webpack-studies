const path = require("path");
const { merge } = require("webpack-merge");
const CommonConfig = require("./webpack.common.config.js");

module.exports = merge(CommonConfig, {
  output: {
    path: path.join(__dirname, "..", "dev"),
    filename: "bundle.js",
  },
});
