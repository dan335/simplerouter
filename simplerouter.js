Router = function() {
  this.path = new ReactiveVar(window.location.pathname);
}

Router.prototype.go = function(path) {
  this.path.set(path);
  window.history.pushState('', '', path);
}

SimpleRouter = new Router();

window.onpopstate = function(event) {
  SimpleRouter.path.set(window.location.pathname);
};
