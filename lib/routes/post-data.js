var data = require('../data');
var _ = require('lodash');

function legacyPostData(req,res){
  data.GetAllData().then(function(pData){
    res.render('legacyPostData', _.pluck(pData,'body'));
  });
}

function getPostData(req,res){

  var key = req.query.key;
  var id = req.query.id;

  if(id){
    data.GetData(id).then(function(result){
      res.send(result);
    });
  } else if(key){
    data.GetDataByKey(key).then(function(result){
      res.send(result);
    });
  } else {
    //get all
    data.GetAllData().then(function(result){
      res.send(result);
    });
  }

}

function clearPostData(req, res){
  var key = req.query.key;
  var id = req.query.id;

  if(id){
    data.ClearData(id).then(function(result){
      res.send(result);
    });
  } else if(key){
    data.ClearDataByKey(key).then(function(result){
      res.send(result);
    });
  } else {
    //get all
    data.ClearAll().then(function(result){
      res.send(result);
    });
  }
}

//angular page
function postDataView(req,res){
  res.render('postData');
}

module.exports = {
  legacyPostData: legacyPostData,
  getPostData: getPostData,
  postDataView: postDataView,
  clearPostData: clearPostData
};