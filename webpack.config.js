// const path = require("path");

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "bundle-[contenthash].js",
//   },
//   optimization: {
//     minimize: true,
//   },
//   mode: "none",
// };

module.exports = function (env) {
  if (env === undefined) {
    env = "dev";
  }
  return require(`./config/webpack.${env}.config.js`);
};
