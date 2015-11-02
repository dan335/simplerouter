SimpleRouter.  A very simple router for Meteor.  Handles changing the url and back button history.  Provides a ReactiveVar of the current url.  The only dependency is ReactiveVar.

    SimpleRouter.go('/blog');

This changes the url to '/blog' without reloading the page.  Clicking the browser back button will go to the previous page.

    SimpleRouter.path.get();

This is a ReactiveVar containing the current path.

See the examples folder for a simple example.

Has not been tested in many browsers.  Pull requests welcome to fix/improve.
