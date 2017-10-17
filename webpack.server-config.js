const webpack = require("webpack");

module.exports = {
  node: {
    __dirname: false,
    __filename: false,
  },
  target: "node",
  entry: ["./server/server.js", "./node_modules/webpack/hot/poll?1000"],
  output: {
    path: "./dist",
    filename: "server.bundle.js",
    libraryTarget: "commonjs"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  externals: [/^[a-z]/],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015-node4"]
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015-node4"]
        }
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: "source-map"
};
