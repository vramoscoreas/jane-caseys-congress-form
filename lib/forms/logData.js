var fs = require('fs');

module.exports = function (body) {
  body = JSON.stringify(body) + '\n';
  fs.appendFile("postData.txt", body, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Data saved:" + body);
    }
  })
};