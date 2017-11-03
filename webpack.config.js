var path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    stats: "errors-only",
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: "./src/public/index.html"
    })
  ]
};
