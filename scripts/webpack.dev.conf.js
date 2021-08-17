const { merge } = require('webpack-merge');
const webpack = require('webpack');
const betterProgress = require('better-webpack-progress');
const baseWebpackConfig = require('./webpack.base.conf.js');
const config = require('./config');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].js',
    path: config.dev.path,
    publicPath: config.dev.publicPath,
  },
  plugins: [
    // 模块热更新
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(betterProgress({
      mode: 'compact', // or 'detailed' or 'bar'
    })),
  ],
  optimization: {
    moduleIds: 'named',
  },
});
