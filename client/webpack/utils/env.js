const path = require('path');

export const mode = process.env.NODE_ENV ?? 'production';
export const isDevServer = process.env.WEBPACK_IS_DEV_SERVER === 'true';
export const isProd = mode === 'production';
export const isDev = !isProd;
export const rootDir = path.join(__dirname, '../../');
export const webpackDir = path.join(__dirname, '../');
export const defaultPort = 8080;
