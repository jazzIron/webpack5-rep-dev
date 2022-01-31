const { merge } = require('webpack-merge');
import baseConfig from './webpack/base'

//export default () => (isProd ? merge(baseConfig, prodConfig) : merge(baseConfig, devConfig));
export default () => baseConfig;
