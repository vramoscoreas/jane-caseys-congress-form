var _ = require('lodash');
var fs = require('fs');
var path = process.argv[2];
var contents = fs.readFileSync(path, 'utf8');
var yaml = require('yaml-js');

var crack = yaml.load(contents);

var fields = _.findWhere(crack.contact_form.steps,
                         function(step) {
                           return _.contains(_.keys(step), 'select');
                         });

var topic_field = _.findWhere(fields.select, {value: '$TOPIC'});

var jade_options = _.map(topic_field.options, function (v, k) {
  var out = "option(value='" + v + "') " + k;
  out = out.replace(/\n/g, "\\n");
  out = out.replace(/\t/g, "\\t");
  return out;
}).join('\n')

console.log(jade_options);
//console.log(JSON.stringify(crack, null, 2));

/*
https://raw.githubusercontent.com/unitedstates/contact-congress/master/members/M001111.yaml
https://raw.githubusercontent.com/unitedstates/contact-congress/master/members/C000127.yaml
https://raw.githubusercontent.com/unitedstates/contact-congress/master/members/M000404.yaml
*/
