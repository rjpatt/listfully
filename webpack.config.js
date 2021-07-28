const path = require('path');

module.exports = {
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
        secure: false,
        logLevel: 'debug',
      }

    },
    publicPath: '/build/',
    hot: true,
  },
  entry: path.join(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      }
    ]
  }
}