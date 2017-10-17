const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/provider.jsx',
        vendor: [
            'babel-polyfill',
            'react',
            'react-dom',
            'react-router-dom',
            'react-redux',
            'redux',
            'redux-promise',
            'axios',
            'lodash',
        ],
    },
    output: {
        path: __dirname + '/public',
        filename: 'app.bundle.js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js'}),
    ],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                },
            },
        ],
    },
    devServer: {
        port: 5000,
        contentBase: 'public',
        proxy: {
          '**': {
            target: 'http://localhost:3000',
          },
        },
        historyApiFallback: true,
      },
      devtool: 'source-map',
    };