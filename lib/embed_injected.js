;(function () {
  var nativePushState = window.history.pushState
  window.history.pushState = function () {
    window.postMessage({
        type : 'nodeico_pushState'
      , text : JSON.stringify(Array.prototype.slice.call(arguments))
    }, '*')
    return nativePushState.apply(this, arguments)
  }
}())