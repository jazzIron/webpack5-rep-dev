const path = require('path');
import { aliasItems } from './config';
import * as plugins from './plugins';
import { rootDir, isDevServer, isProd } from './utils/env';
import { arrayFilterEmpty } from './utils/helpers';

export default {
  context: __dirname,
  target: isDevServer ? 'web' : ['web', 'es5'],
  mode: isProd ? 'production' : 'development',
  main: [path.join(rootDir, '/src/index.tsx')],
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: isDevServer ? undefined : './',
    filename: isDevServer ? '[name].[fullhash].js' : '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ], // 순서 중요함, 뒤에서 부터 실행
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
  plugins: arrayFilterEmpty([plugins.providePlugin]),
  resolve: {
    alias: aliasItems,
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
};
