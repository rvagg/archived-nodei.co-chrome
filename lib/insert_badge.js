const $         = require('./ender')
    , badgeHtml =
          '<div class="nodeico-badges" style="text-align: center;">'
        + '<a href="https://nodei.co/npm/{name}/?chrome">'
        + '<img src="https://nodei.co/npm/{name}.png?downloads=true&stars=true&chrome" style="margin-right: 4px;">'
        + '</a>'
        + '<a href="https://nodei.co/npm/{name}/?chrome">'
        + '<img src="https://nodei.co/npm-dl/{name}.png?months=6&chrome" style="margin-bottom: 6px;">'
        + '</a>'
        + '</div>'

function insert (name) {
  var $fileList = $('.bubble.files-bubble')
  if (!$fileList[0])
    return

  $fileList.after($(badgeHtml.replace(/\{name\}/g, name)))
}

module.exports = insert