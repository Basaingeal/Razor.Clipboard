const path = require("path");
const TerserJSPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    clipboard: "./src/clipboard.ts",
    "clipboard.min": "./src/clipboard.ts"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "wwwroot")
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        include: /\.min\.js$/
      })
    ]
  }
};