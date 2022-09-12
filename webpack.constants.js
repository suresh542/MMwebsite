module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 3000,
  CONNECTION_TYPE: process.env.CONNECTION_TYPE || 'http',
  APP_NAME: process.env.APP_NAME || "Munch Magic",
  VERSION: process.env.VERSION || '0.1',
  THEME_COLOR: process.env.THEME_COLOR || '#7436ff',
  PROXY_URL: process.env.PROXY_URL || false,
};
