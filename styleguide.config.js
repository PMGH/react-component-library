module.exports = {
  webpackConfig: require('./webpack.config.js'),
  components: 'src/components/**/*.jsx',
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse
};
