function buildConfig() {
  return require('./webpack.config.' + process.env.NODE_ENV + '.js');
}

module.exports = buildConfig;