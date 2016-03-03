Package.describe({
  name: 'thoward27:errors',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Display application errors to the user.'
});

Package.onUse(function (api, where) {
  api.versionsFrom('0.9.0');

  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export)
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('thoward27:errors', 'client');
  api.use(['tinytest', 'test-helpers', 'templating'], 'client');

  api.addFiles('errors_tests.js', 'client');
});
