var ender = require('ender-js')
  , $     = ender.noConflict(function () {})

global.ender = $

require('qwery-mobile/ender')
require('bonzo/src/ender')
require('domready/src/ender')
require('reqwest/src/ender')

module.exports = $