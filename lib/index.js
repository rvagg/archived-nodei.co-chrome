const inject     = require('./inject')
    , _pushState = window.history.pushState
    , _replaceState = window.history.replaceState

require('./embed_inject')

function page () {
  var la = window.location.pathname.split('/')
  if (la.length == 3)
    inject(la[1], la[2])
}

window.addEventListener('message', function(event) {
  if (event.source == window
      && event.data.type
      && event.data.type == 'nodeico_pushState') {
    page()
  }
}, false)

page()