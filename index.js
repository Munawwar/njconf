const fs = require('fs');
const json5 = require('json5');
const deepExtend = require('deep-extend');

module.exports = {
  load(...paths) {
    const mergedConfig = {};
    paths.reverse();
    this.readConfigFiles(paths).forEach(config => deepExtend(mergedConfig, config));
    return mergedConfig;
  },

  readConfigFiles(paths) {
    return paths.map(path => json5.parse(fs.readFileSync(path, 'utf8')));
  },
};
