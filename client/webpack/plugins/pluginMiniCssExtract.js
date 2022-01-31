const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 여러 css파일을 하나의 css 파일로 병합

const config = {
  filename: '[name].[contenthash].css',
};

export const miniCssExtractPlugin = new MiniCssExtractPlugin(config);
