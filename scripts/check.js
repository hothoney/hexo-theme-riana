const fs = require('fs')
const path = require('path')
const logger = require('hexo-log')()

logger.info(`
.########..####....###....##....##....###...
.##.....##..##....##.##...###...##...##.##..
.##.....##..##...##...##..####..##..##...##.
.########...##..##.....##.##.##.##.##.....##
.##...##....##..#########.##..####.#########
.##....##...##..##.....##.##...###.##.....##
.##.....##.####.##.....##.##....##.##.....##`)

const checkDeps = (name) => {
  try {
    require.resolve(name)
    return true
  } catch (error) {
    logger.error(`Dependence ${name} is missing!`)
  }
  return false
}

const missDeps = [
  "hexo-generator-archive",
  "hexo-generator-category",
  "hexo-generator-index",
  "hexo-generator-tag",
  "hexo-renderer-jade",
  "hexo-renderer-marked",
  "hexo-renderer-scss"
]

if (missDeps.map(checkDeps).some(installed => !installed)) {
  logger.warn('Please install the missing dependencies.')
}
else {
  logger.info("You're all set! Ready to go!")
}