const path = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base.config');

const prodConfig = merge(baseConfig, {
  mode: 'production',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist_temp'),
    publicPath: '/',
    filename: '[name].[chunkhash:7].js',
    chunkFilename: '[name].[chunkhash:7].js'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/static',
        to: path.resolve(__dirname, '../dist_temp')
      }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:7].css',
      chunkFilename: '[name].[contenthash:7].css'
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
});

module.exports = prodConfig;
