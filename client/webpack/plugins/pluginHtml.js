const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
import { isProd, rootDir } from '../utils/env';

const config = {
  template: path.join(rootDir, './src/index.html'),
  templateParameters: {
    env: isProd ? '' : '(개발용)',
  },
  minify:
    // 디버깅쉽게 하기위해 production 환경에서만 설정
    isProd
      ? {
          collapseWhitespace: true, // 빈칸 제거
          removeComments: true, // 주석제거
        }
      : false,
};

export const htmlWebpackPlugin = new HtmlWebpackPlugin(config);
