const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //  HTML 파일 생성을 단순화

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    inline: true,
    liveReload: true,
    hot: false,
    compress: true,
    historyApiFallback: true,
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'], // 순서 중요함, 뒤에서 부터 실행
      },
    ],
  },
  plugins: [
    //css 파일과 js파일을 각각 html파일의 link태그, script태그로 추가
    new HtmlWebpackPlugin({
      template: './src/index.html',
      templateParameters: {
        env: '(개발용)',
      },
      minify: false,
    }),
  ],
};
