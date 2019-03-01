const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const devMode = (process.env.NODE_ENV !== 'production');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          (devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader),
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          (devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader),
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          (devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader),
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: (
          devMode
            ? ['file-loader']
            : {
              loader: 'url-loader',
              options: {
                limit: 2048,
                name: 'images/[name].[hash:7].[ext]'
              }
            }
        )
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: (
          devMode
            ? ['file-loader']
            : {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[hash:7].[ext]'
              }
            }
        )
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/templates/index.html',
      templateParameters: {
        NODE_ENV: process.env.NODE_ENV
      }
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    }),
    new VueLoaderPlugin()
  ]
};
