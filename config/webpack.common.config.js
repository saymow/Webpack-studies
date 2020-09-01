const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
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
