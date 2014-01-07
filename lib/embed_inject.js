/*global chrome*/
var s = document.createElement('script')
s.src = chrome.extension.getURL('lib/embed_injected.js')
;(document.head || document.documentElement).appendChild(s)