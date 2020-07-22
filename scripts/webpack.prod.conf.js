const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf.js');
const config = require('../config');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id].[chunkhash].js',
    path: config.build.path,
    publicPath: config.build.publicPath,
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 压缩css
    new OptimizeCSSAssetsPlugin({}),
    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // 使用dll文件
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, '../dll/vendor.dll.js'), // 对应的 dll 文件路径
    }),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '..', 'dll/vendor-manifest.json'),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
    },
  },
});
