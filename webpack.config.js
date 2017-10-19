const webpack = require("webpack");

module.exports = {
  entry: "./src/store.jsx",
  output: {
    path: __dirname + "/public",
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  devServer: {
    port: 5000,
    contentBase: "public",
    proxy: {
      "**": {
        target: "http://localhost:3000"
      }
    },
    historyApiFallback: true
  },
  devtool: "source-map"
};
