const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          ExtractCssChunks.loader,
          {
            loader: 'css-modules-typescript-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new ExtractCssChunks(),
    new HtmlWebpackPlugin({
      title: 'UniversityConsole',
    }),
    new StatsWriterPlugin({
      fields: null,
      stats: {chunkModules: true}
    }),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'vendor-react',
          chunks: 'all',
        },
        muiVendor: {
          test: /[\\/]node_modules[\\/](@mui)[\\/]/,
          name: 'vendor-mui',
          chunks: 'all',
        },
      },
    },
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
    },
    compress: true,
    port: 63341,
    allowedHosts: 'auto',
    historyApiFallback: true,
  },
};
