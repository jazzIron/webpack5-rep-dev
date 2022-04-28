const HtmlWebpackPlugin = require('html-webpack-plugin'); //  HTML 파일 생성을 단순화
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // css 파일도 빈칸을 없애는 압축
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 여러 css파일을 하나의 css 파일로 병합
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].bundle.js',
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // 콘솔 로그를 제거한다
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    //css 파일과 js파일을 각각 html파일의 link태그, script태그로 추가
    new HtmlWebpackPlugin({
      template: './src/index.html',
      templateParameters: {
        env: '',
      },
      minify:
        // 디버깅쉽게 하기위해 production 환경에서만 설정
        {
          collapseWhitespace: true, // 빈칸 제거
          removeComments: true, // 주석제거
        },
    }),
    // javascript css 뽑기(개발환경에는 필요가없음)
    // loader 설정이 추가로 필요함
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
