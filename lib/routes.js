// Third party libraries
var express = require('express'),
    app = exports = module.exports = express();

// Local includes
var mod_forms = require('./forms');

/** Global ROUTES **/
app.get('/globalform', mod_forms.callbacks.goJane);
