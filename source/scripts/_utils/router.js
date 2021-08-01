// router.js

function Router() {
  this.mode = 'hash'
  this.path = ''
}

// hash mode
Router.prototype.pushHash = function pushHash() {
  this.mode = 'hash'
  this.path = arguments[0]
  window.location.hash = this.path
}
Router.prototype.replaceHash = function replaceHash() {
  this.mode = 'hash'
  this.path = arguments[0]
  const { href } = window.location
  const index = href.indexOf('#')
  const prefix = href.slice(0, index >= 0 ? index : 0)
  window.location.replace(prefix + '#' + this.path)
}

// history mode
Router.prototype.pushHistory = function pushHistory() {
  this.mode = 'history'
  this.path = arguments[0]
  window.history.pushState(arguments[1], '', this.path)
}
Router.prototype.replaceHistory = function replaceHistory() {
  this.mode = 'history'
  this.path = arguments[0]
  window.history.replaceState(arguments[1], '', this.path)
}

window.Router = Router
window.router = new Router()
