const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",

  entry: [
    // activate HMR for React
    "react-hot-loader/patch",
    "whatwg-fetch",
    "./src/index.jsx",
    "@babel/polyfill"
  ],

  module: {
    rules: [
      {
        test: /\.js[x]{0,1}$/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },

  optimization: {
    namedModules: true,
    noEmitOnErrors: true
  },

  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "scripts/[id]-[hash].js",
    chunkFilename: "scripts/[id]-[hash].js"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],

  resolve: {
    extensions: [".js", ".json", ".jsx"]
  }
};
