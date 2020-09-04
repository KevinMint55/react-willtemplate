const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';
// const HappyPack = require('happypack');
// const os = require('os');
// const HappyPackThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    app: './src/index.js',
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.less', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.join(__dirname, '../src/'),
      Src: resolve('src'),
      Components: resolve('src/components'),
      Utils: resolve('src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   loader: "source-map-loader"
      // },
      {
        test: /\.(js|.jsx)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: true,
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            // loader: "happypack/loader?id=jsx"
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'img/[name].[hash:7].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'media/[name].[hash:7].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'fonts/[name].[hash:7].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash].css',
      chunkFilename: 'css/[id].[chunkhash].css',
    }),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '../src/config/index.js'),
      to: './apiConfig.js',
    }]),
    new HtmlWebpackTagsPlugin({
      tags: [{
        path: 'apiConfig.js',
      }],
      append: false,
    }),
    // 使用dll文件
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, '../dll/vendor.dll.js'), // 对应的 dll 文件路径
    }),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '..', 'dll/vendor-manifest.json'),
    }),
    // new HappyPack({
    //   // 用唯一的标识符id，来代表当前的HappyPack是用来处理一类特定的文件
    //   id:'jsx',
    //   // 如何处理.js文件，用法和Loader配置中一样
    //   loaders: ['babel-loader?cacheDirectory=true'],
    //   threadPool: HappyPackThreadPool,
    // })
  ],
  externals: {
    $config: '$config',
    // "react": "React",
    // "react-dom": "ReactDOM",
  },
};
