var request = require('request');

var PUBLIC_KEY  = '6LeRdfQSAAAAAG_fUXud4U5gaiQStQ5nWEbUS8Sr',
    PRIVATE_KEY = '6LeRdfQSAAAAAGGvll55GUQHg9HEAKH9QjUrtG6j';


exports = module.exports;

exports.goJane = function(req, res) {
  var template = '../lib/forms/views/home';
  res.render(template);
};

exports.captcha = function(req, res) {
  var view = '../lib/forms/views/captcha';

  res.render(view, {
    publicKey: PUBLIC_KEY
  });
};

exports.solveRecaptcha = function(req, res) {
  var data = {
        privatekey: PRIVATE_KEY,
        remoteip:  req.connection.remoteAddress,
        challenge: req.body.recaptcha_challenge_field,
        response:  req.body.recaptcha_response_field
    };

  request.post('http://www.google.com/recaptcha/api/verify', {
    form: data
  }, function(err, resp, body) {
    if (body === 'true\nsuccess') {
      res.redirect('/forms/captchaSolved');
    }
  });
};

exports.captchaSolved = function(req, res) {
  res.render('../lib/forms/views/captchaSolved');
};