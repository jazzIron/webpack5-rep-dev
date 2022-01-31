const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 이전 빌드내용 삭제 플러그인

const config = {
  banner: `build time : ${new Date().toLocaleTimeString()}`,
  cleanStaleWebpackAssets: false,
  cleanOnceBeforeBuildPatterns: ['**/*', '!profile.json', '!tsconfig.tsbuildinfo'],
};

export const cleanWebpackPlugin = new CleanWebpackPlugin(config);
