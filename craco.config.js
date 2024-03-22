const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@model': path.resolve(__dirname, 'src/model'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@api': path.resolve(__dirname, 'src/api'),
    },
  },
};
