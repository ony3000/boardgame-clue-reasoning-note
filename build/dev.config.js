const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config');

const devConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, '../src/static'),
    hot: true,
    overlay: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = devConfig;
