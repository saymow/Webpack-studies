const path = require("path");
const { merge } = require("webpack-merge");
const CommonConfig = require("./webpack.common.config.js");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(CommonConfig, {
  output: {
    path: path.join(__dirname, "..", "production"),
    filename: "bundle-[contenthash].js",
  },
  plugins: [new MiniCssExtractPlugin({ filename: "styles-[contenthash].css" })],
  optimization: {
    minimize: true,
  },
});
