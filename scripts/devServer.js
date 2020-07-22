const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const devWebpackConfig = require('./webpack.dev.conf');
const config = require('../config');

const options = {
  publicPath: '/',
  clientLogLevel: 'warning',
  contentBase: false,
  historyApiFallback: true,
  hot: true,
  inline: true,
  compress: true,
  overlay: { warnings: false, errors: true },
  quiet: true,
  host: '0.0.0.0',
  watchOptions: {
    ignored: [/node_modules/],
    poll: true,
  },
};

const getIPAddress = () => {
  const interfaces = require('os').networkInterfaces();
  for (const devName in interfaces) {
    for (const alias of interfaces[devName]) {
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return '';
};

const devServer = () => {
  const IP = getIPAddress();
  devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
    compilationSuccessInfo: {
      messages: [`应用程序运行地址: http://${IP}:${config.dev.port}`],
    },
  }));
  WebpackDevServer.addDevServerEntrypoints(devWebpackConfig, options);
  new WebpackDevServer(webpack(devWebpackConfig), options).listen(config.dev.port, '0.0.0.0', () => { });
};

devServer();
