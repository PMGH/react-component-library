const path = require('path');

module.exports = {
  webpackConfig: require('./webpack.config.js'),
  components: 'src/components/**/*.jsx',
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
  require: [
    path.join(__dirname, './src/index.scss')
  ]
};
