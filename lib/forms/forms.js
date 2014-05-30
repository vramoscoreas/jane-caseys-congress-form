/**
* This is a self-contained module that defines its routes, callbacks, models and views
* all internally. Such approach to code organization follows the recommendations of TJ:
*
* http://vimeo.com/56166857
* 
*/

// Third-party libraries
var _ = require('lodash'),
    express = require('express'),
    app = exports = module.exports = express();

// Don't just use, but also export in case another module needs to use these as well.
exports.callbacks    = require('./controllers/forms');
// exports.models       = require('./models');

//-- For increased module encapsulation, you could also serve templates with module-local 
//-- paths, but using shared layouts and partials may become tricky
//var hbs = require('hbs');
// app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//app.engine('handlebars', hbs.__express);

// Module's Routes. Please note this is actually under /forms, because module is attached under /forms
app.get('/', exports.callbacks.goJane);
app.get('/captcha', exports.callbacks.captcha);
app.post('/solveReCaptcha', exports.callbacks.solveRecaptcha);
app.get('/captchaSolved', exports.callbacks.captchaSolved);
app.get('/captchaFailed', exports.callbacks.captchaFailed);
