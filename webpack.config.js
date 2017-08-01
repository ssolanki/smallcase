const { resolve } = require('path')

const DashboardPlugin = require('webpack-dashboard/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const srcDir = resolve(__dirname, 'src')

module.exports = {
  entry: `${srcDir}/index.js`,
  output: {
    filename: 'bundle.js',
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
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]-[local]-[hash:base64:6]',
          camelCase: true
        }
      }]
    }, {
      test: /\.(jpe?g$|gif|png|woff|woff2|eot|otf|ttf|svg)$/,
      loader: 'file-loader?limit=100000'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`
    }),
    new ExtractTextPlugin({
      filename: 'style.[chunkhash:6].css',
      allChunks: true
    }),
    new DashboardPlugin()
  ]
}
