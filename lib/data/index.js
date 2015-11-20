var _ = require('lodash');
var expireTime = require('../../config/redis').redisExpirationSeconds;
var BPromise = require('bluebird');


function setData(key, data){
  console.log('setting data', key);


}

function getData(key){



}

function getAllData(){
  console.log('getting all data');


}

function clearData(key){

  console.log('clearing data: '+key);




}

function clearAll(){
  console.log('clearing ALL data');



}

module.exports = {


  GetData: getData,
  SetData: setData,
  ClearData: clearData,
  ClearAll: clearAll,
  GetAllData: getAllData
};