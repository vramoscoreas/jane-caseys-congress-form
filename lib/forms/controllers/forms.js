var request = require('request');
var logData = require('../logData');
var fs = require('fs');
var path = require('path');

var PUBLIC_KEY  = '6LeRdfQSAAAAAG_fUXud4U5gaiQStQ5nWEbUS8Sr',
    PRIVATE_KEY = '6LeRdfQSAAAAAGGvll55GUQHg9HEAKH9QjUrtG6j',
    NEW_RECAPTCHA_PUBLIC_KEY = '6LdRSAYTAAAAAIF6kPVGPOY-Mg6Qvwca0gdphFxN',
    NEW_RECAPTCHA_PRIVATE_KEY = '6LdRSAYTAAAAAIpObr2gN5Ua66yNj0GccY2Euft8',
    VIEWS_DIR = '../lib/forms/views/',
    ZIP_REGEX_PATTERN = /^[0-9]{5}$/,
    EMAIL_REGEX_PATTERN = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/ig;


exports = module.exports;

exports.goJane = function(req, res) {
  res.render(VIEWS_DIR + 'home');
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
      logData(req.body);
      res.redirect('/forms/success');
    } else {
      res.redirect('/forms/failed');
    }
  });
};

exports.solveNewRecaptcha = function(req, res) {
  var data = {
    secret: NEW_RECAPTCHA_PRIVATE_KEY,
    remoteip:  req.connection.remoteAddress,
    response:  req.body['g-recaptcha-response']
  };

  request.post('https://www.google.com/recaptcha/api/siteverify', {
    form: data
  }, function(err, resp, body) {
    body = JSON.parse(body);
    if (!err && body.success) {
      logData(req.body);
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

exports.twoStepTest = function(req, res) {
  var zip = req.body.zipcode;

  if (zip.match(ZIP_REGEX_PATTERN)) {
    logData(req.body);
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
    logData(req.body);
    res.redirect('/forms/success');
  } else {
    res.redirect('/forms/failed');
  }
};

exports.postData = function(req, res) {
  var data = 'File does not exist';
  try {
    data = fs.readFileSync('postData.txt', { encoding: 'utf8' });
  }
  catch (err) {
    console.log('file does not exist');
  }
  res.render(VIEWS_DIR + 'postData', { postData: data });
};

exports.deletePostData = function(req, res) {
  fs.unlink('postData.txt', function(err) {
    if (err) {
      console.log('file not deleted');
    }
  });
  res.redirect('/forms/postData');
};

exports.getCongressForm = function(req, res) {
  res.render(VIEWS_DIR + req.params.bioId,
    {
      publicKey: PUBLIC_KEY,
      newPublicKey: NEW_RECAPTCHA_PUBLIC_KEY,
      bioId: req.params.bioId
    }, function(err, html) {
      if(err) {
        console.log('cannot find view at ' + VIEWS_DIR + req.params.bioId);
        res.render(VIEWS_DIR + 'home'); // File doesn't exist
      } else {
        res.end(html);
      }
    });
};

exports.submitFormData = function(req, res) {
  logData(req.body);
  res.render(VIEWS_DIR + 'success');
};

exports.renderImage = function(req, res) {
  var remainder = (new Date().getTime()) % 6;
  var imgPath = path.join(__dirname + '/../images/captcha.jpg');
  if (remainder !== 0)
    imgPath = path.join(__dirname + '/../images/captcha' + remainder + '.jpg');
  res.sendfile(imgPath, function (err){
    if (err) {
      console.log(err);
    }
  });
};