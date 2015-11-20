var request = require('request');
var config = require('../../config');

function solveRecaptcha(req, res) {
  var data = {
    privatekey: config.captcha.old.privateKey,
    remoteip:  req.connection.remoteAddress,
    challenge: req.body.recaptcha_challenge_field,
    response:  req.body.recaptcha_response_field
  };

  request.post('http://www.google.com/recaptcha/api/verify', {
    form: data
  }, function(err, resp, body) {
    if (!err && body === 'true\nsuccess') {
      logData.set(req.body);
      res.redirect('/forms/success');
    } else {
      res.redirect('/forms/failed');
    }
  });
}

function solveNewRecaptcha(req, res) {
  var data = {
    secret: config.captcha.new.privateKey,
    remoteip:  req.connection.remoteAddress,
    response:  req.body['g-recaptcha-response']
  };

  request.post('https://www.google.com/recaptcha/api/siteverify', {
    form: data
  }, function(err, resp, body) {
    body = JSON.parse(body);
    if (!err && body.success) {
      logData.set(req.body);
      res.redirect('/forms/success');
    } else {
      res.redirect('/forms/failed');
    }
  });
}

module.exports = {
  solveRecaptcha: solveRecaptcha,
  solveNewRecaptcha: solveNewRecaptcha
};