// frontend/babel.config.js
// this file sets the configurations for babel
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
