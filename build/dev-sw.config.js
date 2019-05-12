const path = require('path');
const merge = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');
const baseConfig = require('./base.config');

const devConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, '../src/static'),
    overlay: true
  },
  plugins: [
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true
    })
  ]
});

module.exports = devConfig;
