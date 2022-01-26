const { ProgressPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

const plugins = [
  new ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: './index.html',
  }),
]

module.exports = {
  resolve: {
    extensions: ['.js'],
  },
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins,
}
