const $         = require('./ender')
    , badgeHtml =
          '<div class="nodeico-badges">'
        +   '<a href="https://nodei.co/npm/{name}/?chrome">'
        +     '<img src="https://nodei.co/npm/{name}.png?chrome" style="margin-right: 4px;">'
        +   '</a>'
        + '</div>'

function insert (name) {
  var existing = false
  
  $('img').map(function(img) {
    var src = $(img).attr('src') || ''
    var src2 = $(img).attr('data-canonical-src') || ''
    if (src.indexOf('nodei.co') > -1) existing = true
    if (src2.indexOf('nodei.co') > -1) existing = true
  })
  
  if (existing) return
  
  var html = $(badgeHtml.replace(/\{name\}/g, name))
  
  var $readme = $('.entry-content')
  if ($readme[0]) {
    var $child = $readme.children(":first")
    if ($child[0]) $($child[0]).after(html)
    else $readme.prepend(html)
    return
  }
  
  var $fileList = $('.bubble.files-bubble')
  if ($fileList[0]) return $fileList.after(html)
}

module.exports = insert