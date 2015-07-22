var fs = require('fs');
var data = require('../data');
var uuid = require('uuid');

function setData(body){

  var str = JSON.stringify(body) + '\n';

  //redis log
  var key = (body.email ||'invalid') + uuid.v4();
  data.SetData(key,body).then(function(){
    console.log('Data saved (redis key = '+key+'):' + str);
  }).catch(function(err){
    console.log(err);
  });

  //flat file log
  fs.appendFile('postData.txt', str, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Data saved to flat file:' + str);
    }
  });
}

function getData(key){
  return data.GetData(key);
}

function clear(key){
  return data.ClearData(key);
}

function clearAll(){

  //clear flat file
  fs.unlink('postData.txt', function(err) {
    if (err) {
      console.log('file not deleted');
    }
  });


  //clear romis
  return data.ClearAll();
}

function getAllData(key){
  return data.GetAllData(key);
}


module.exports = {
  set: setData,
  get: getData,
  getAll: getAllData,
  clear: clear,
  clearAll: clearAll
};