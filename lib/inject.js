const $           = require('./ender')
    , insertBadge = require('./insert_badge')

function loadFromNpm (name) {
  $.ajax({
      url     : 'https://registry.npmjs.org/' + name
    , type    : 'json'
    , error   : function (err) { /* likely not found */ }
    , success : function (resp) {
        if (resp && resp.name === name)
          insertBadge(name)
      }
  })
}

function inject (username, repo) {
  if (!$('.only-with-full-nav')[0])
    return

  $.ajax({
      url     : 'https://raw.github.com/' + username + '/' + repo + '/master/package.json'
    , error   : function (err) { /* probably not an npm package */ }
    , success : function (resp) {
        if (resp && typeof resp.name == 'string')
          loadFromNpm(resp.name)
      }
  })
}

module.exports = inject