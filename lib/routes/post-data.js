var data = require('../data');
var _ = require('lodash');

function legacyPostData(req,res){

  var key = req.query.key;
  var p = key ? data.GetDataByKey(key) : data.GetAllData();
  p.then(function(pData){

    var result = pData && pData.length ?
      JSON.stringify(_.pluck(pData,'body'),null,2) :
      '';

    var action = key && pData && pData.length ?
    '/forms/postData?key='+pData[0].key :
      null;

    res.render('legacyPostData',
      {postData: result, action:action});
  });
}

function legacyClearData(req,res){
  var key = req.query.key;
  var p = key ? data.ClearDataByKey(key) : data.ClearAll();

  p.then(function(){
    res.redirect('/forms/postData');
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
  legacyClearData: legacyClearData,
  getPostData: getPostData,
  postDataView: postDataView,
  clearPostData: clearPostData
};