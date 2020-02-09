const path = require('path');

module.exports = {
  webpackConfig: require('./webpack.config.js'),
  components: 'src/components/**/*.jsx',
  require: [
    path.join(__dirname, './src/index.scss')
  ]
};
