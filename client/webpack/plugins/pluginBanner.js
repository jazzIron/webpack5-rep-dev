const webpack = require('webpack');
const childProcess = require('child_process'); // command 명령어 사용가능

const config = {
  banner: `
    Build Date: ${new Date().toLocaleString()}
    Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')},
    Author: ${childProcess.execSync('git config user.name')}
  `,
};

export const bannerPlugin = new webpack.BannerPlugin(config);
