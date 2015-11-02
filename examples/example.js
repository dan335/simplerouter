if (Meteor.isClient) {
  Template.body.helpers({
    path: function() {
      return SimpleRouter.path.get();
    }
  });

  Template.body.events({
    'click button': function() {
      SimpleRouter.go('/newpage');
    },

    'click a': function(event, template) {
      event.preventDefault();
      SimpleRouter.go('/another/page');
    }
  });
}
