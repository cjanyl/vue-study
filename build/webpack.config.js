'use strict';

const path = require('path');
const vueLoaderConfig = require('./vue-loader.conf')

module.exports = {
  //指定打包入口
  entry: {
    index: './src/main.js'
  },
  //指定打包出口
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        /*es6*/
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        /*css*/
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ],
  },
  plugins: [],
  mode: 'production', //指定当前打包的环境 development none
}
