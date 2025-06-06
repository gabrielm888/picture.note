const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules\/(?!(@react-native|react-native|react-native-vector-icons)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'module:metro-react-native-babel-preset',
              '@babel/preset-typescript',
            ],
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/',
          },
        }],
      },
    ],
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
      'react-native-vector-icons': 'react-native-vector-icons/dist/lib',
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.web.js', '.js', '.web.ts', '.ts', '.web.tsx', '.tsx', '.json', '.jsx'],
    fallback: {
      'crypto': false,
      'stream': false,
      'path': false,
      'fs': false
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: isDevelopment,
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  optimization: {
    minimize: !isDevelopment,
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
};
