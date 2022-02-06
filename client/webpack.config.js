const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const childProcess = require('child_process'); // command 명령어 사용가능
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 이전 빌드내용 삭제 플러그인
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); // ts-loader의 성능을 향상

const prodConfig = require('./webpack.prod');
const devConfig = require('./webpack.dev');

module.exports = () => {
  const mode = process.env.NODE_ENV === 'production';

  const commonConfig = {
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, './dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    resolve: {
      // 확장자를 순서대로 해석
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      alias: {
        '@src': path.resolve(__dirname, 'src/'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@features': path.resolve(__dirname, 'src/features'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@layout': path.resolve(__dirname, 'src/layout'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@assets': path.resolve(__dirname, 'src/assets'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|woff|woff2|ttf|svg|ico)$/i,
          loader: 'url-loader',
          options: {
            name: '[name].[ext]?[hash]', // hash 처리(캐시)
            limit: 20000, // 2kb 최대
          },
        },
      ],
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: `
        Build Date: ${new Date().toLocaleString()}
        Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')},
        Author: ${childProcess.execSync('git config user.name')}
      `,
      }),
      // dist Folder delete
      new CleanWebpackPlugin({
        banner: `build time : ${new Date().toLocaleTimeString()}`,
        cleanStaleWebpackAssets: false,
      }),
      new ForkTsCheckerWebpackPlugin(),
    ],
  };

  if (mode) return merge(commonConfig, prodConfig);
  else return merge(commonConfig, devConfig);
};
