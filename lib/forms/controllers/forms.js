var request = require('request');

var PUBLIC_KEY  = '6LeRdfQSAAAAAG_fUXud4U5gaiQStQ5nWEbUS8Sr',
    PRIVATE_KEY = '6LeRdfQSAAAAAGGvll55GUQHg9HEAKH9QjUrtG6j',
    VIEWS_DIR = '../lib/forms/views/',
    ZIP_REGEX_PATTERN = /^[0-9]{5}$/,
    EMAIL_REGEX_PATTERN = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/ig;


exports = module.exports;

exports.goJane = function(req, res) {
  res.render(VIEWS_DIR + 'home');
};

exports.captcha = function(req, res) {
  var view = VIEWS_DIR + 'captcha';

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
    if (!err && body === 'true\nsuccess') {
      res.redirect('/forms/success');
    } else {
      res.redirect('/forms/failed');
    }
  });
};

exports.success = function(req, res) {
  res.render(VIEWS_DIR + 'success');
};

exports.failed = function(req, res) {
  res.render(VIEWS_DIR + 'failed');
};

exports.twoStep = function(req, res) {
  res.render(VIEWS_DIR + 'twoStepP1');
};

exports.twoStepTest = function(req, res) {
  var zip = req.body.zipCode;

  if (zip.match(ZIP_REGEX_PATTERN)) {
    res.redirect('/forms/twoStepTwo');
  } else {
    res.redirect('/forms/failed');
  }
};

exports.twoStepTwo = function(req, res) {
  res.render(VIEWS_DIR + 'twoStepP2');
};

exports.twoStepSubmit = function(req, res) {
  var email = req.body.email;

  if (email.match(EMAIL_REGEX_PATTERN)) {
    res.redirect('/forms/success');
  } else {
    res.redirect('/forms/failed');
  }
};

exports.requiredSelect = function(req, res) {
  res.render(VIEWS_DIR + 'requiredSelect');
};

exports.submitRequiredSelect = function(req, res) {
  res.render(VIEWS_DIR + 'success');
};