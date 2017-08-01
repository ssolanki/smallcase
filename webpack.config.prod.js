const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

const srcDir = resolve(__dirname, 'src')

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: {
    app: './index.js',
    vendor: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:6].js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'standard-loader',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract(['css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]",camelCase'])
    }, {
      test: /\.(jpe?g$|gif|png|woff|woff2|eot|otf|ttf|svg)$/,
      loader: 'file-loader?limit=100000'
    }]
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom' : 'preact-compat'
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: '200.html',
      template: './index.html'
    }),
    new ExtractTextPlugin({
      filename: 'style.[chunkhash:6].css',
      allChunks: true
    }),
    new DashboardPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      children: true,
      async: true
    }),
    new CopyWebpackPlugin([{
      from: resolve(__dirname, './src/fonts/'),
      to: resolve(__dirname, './dist/')
    }, {
      from: resolve(__dirname, './src/images/'),
      to: resolve(__dirname, './dist/images')
    }
    ])
  ]
}
