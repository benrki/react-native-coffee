/**
 * React Native Webpack Starter Kit
 * https://github.com/jhabdas/react-native-webpack-starter-kit
 */
(function() {
  'use strict'

  var path = require('path')
  var webpack = require('webpack')

  module.exports = {
    debug: true,
    devtool: 'source-map',
    entry: {
      'index.ios': ['./src/main.ios.js'],
      'index.android': ['./src/main.android.js'],
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
    },
    resolve: {
      extensions: ['', '.js', '.cjsx', '.coffee']
    },
    module: {
      preLoaders: [
        {
          test: /\.(js|jsx|es6)$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'eslint-loader',
        }
      ],
      loaders: [
        {
          test: /\.cjsx$/,
          exclude: /node_modules/,
          loaders: ['coffee', 'cjsx']
        },
        {
          test: /\.coffee$/,
          exclude: /node_modules/,
          loader: 'coffee'
        },
        {
          test: /\.js$/,
          include: /node_modules\/react-native/,
          loader: 'babel',
          query: {
            cacheDirectory: true,
            presets: ['es2015', 'stage-1', 'react']
          }
        },
        {
          test: /\.(js|jsx|es6)$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            cacheDirectory: true,
            presets: ['es2015', 'stage-1', 'react']
          }
        }
      ]
    }
  }
}())
