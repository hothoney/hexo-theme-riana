const version = require('../package.json').version
hexo.extend.helper.register('version', () => {
  return version
})