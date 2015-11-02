Package.describe({
  name: 'danimal:simplerouter',
  version: '1.0.0',
  summary: 'SimpleRouter.  A very simple router for Meteor.',
  git: 'https://github.com/dan335/simplerouter',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['reactive-var']);
  api.addFiles('simplerouter.js', 'client');
  api.export('SimpleRouter', 'client');
});
