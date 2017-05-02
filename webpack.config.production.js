var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: {
    index: './src/js/main.js',
    vendor: ['vue', 'vue-router', 'vue-resource', 'vuex', 'element-ui', 'clone', 'axios']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    //publicPath: '/dist/',
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] })
      },
      {
        test: /\.s[a|c]ss$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      //hash: true,
      chunks: ['manifest', 'vendor', 'index']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        LAZY_LOAD: false
      }
    }),
    new ExtractTextPlugin({
      filename:'style.[contenthash].css', 
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  devtool: false
}