const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /.js$/,
        exclude: "/node_modules/",
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: "./html/index.html",
    }),
  ],
  entry: "./src/index.js",
  mode: "none",
};

// Entry is relative to where webpack is executed from,
// whereas, output path is relative to the configuration file it self.
