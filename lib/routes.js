// Third party libraries
var express = require('express'),
    exports = module.exports = express(),
    app = exports;

// Local includes
var mod_forms = require('./forms');

/** Global ROUTES **/
app.get('/globalform', mod_forms.callbacks.goJane);
