var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var log = require('./lib/log');

var app = express();

var routes = require('./lib/routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',
  express.static(path.join(__dirname,'bower_components')));

app.use('/',routes(express.Router()));

// Start Server

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  console.log('NOT FOUND: '+req.url);
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

var server = app.listen(process.env.PORT || 4242, function() {
  log.info('start', 'port', server.address().port);
});


module.exports = server;