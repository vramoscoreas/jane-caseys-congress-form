require('nodebootstrap-server').setup(function(runningApp) {

  //---- Mounting well-encapsulated application modules
  //---- See: http://vimeo.com/56166857

  runningApp.use('/forms', require('./lib/forms'));
  runningApp.use(require('./lib/routes')); // attach to root route

});