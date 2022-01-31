import TerserJSPlugin from 'terser-webpack-plugin'; // console.log 제거 옵션
import * as plugins from './plugins';

export default {
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin({})],
  },
  plugins: [plugins.cleanWebpackPlugin, plugins.miniCssExtractPlugin],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
