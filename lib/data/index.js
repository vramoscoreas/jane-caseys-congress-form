var romis = require('./romis');
var _ = require('lodash');
var expireTime = require('../../config/redis').redisExpirationSeconds;
var BPromise = require('bluebird');

var keyPrefix = 'JANE_CASEY_';
var ReadWriteLock = require('rwlock');

var lock = BPromise.promisifyAll(new ReadWriteLock());
var readlock = BPromise.promisify(lock.readLock);

function formatKey(key){
  if(key && key.indexOf(keyPrefix)===0) return key;

  return keyPrefix + (key||'invalid');
}


function setData(key, data) {
  console.log('setting data');
  key = formatKey(key);
  return readlock(function (r) {
    return getData(key)
      .then(function (olderData) {
        r();
        olderData = _.isArray(olderData) ? olderData : [];
        olderData.push(data);
        return lock.writeLock(function (rr) {
          return romis.set(key, JSON.stringify(olderData))
            .then(function () {
              console.log('setting data expiration: ' + expireTime + ' seconds');
              return romis.expire(key, expireTime);
            })
            .catch(function (err) {
              console.log('error setting data: ', err);
            }).then(function () {
              rr();
              return BPromise.resolve();
            });
        });
      }).catch(console.log.bind('err setting data'));
  });
}

function getData(key){
  key = formatKey(key);

  console.log('getting data');

  return romis.get(key).then(function(data){
    console.log('data', data, key);
    if(!data) return undefined;

    console.log('returning stored data');
    return JSON.parse(data);
  }).catch(function(err){
    console.log('error getting data: ',err);
  });

}

function getAllData(){
  console.log('getting all data');

  return romis.keys(keyPrefix+'*').then(function(keys){

    return BPromise.map(keys, getData);

  });

}

function clearData(key){
  key = formatKey(key);
  console.log('clearing data: '+key);

  return romis.del(key)
    .then(function(){
      console.log('finished clearing data');
    })
    .catch(function(err){
      console.log('error clearing data: ', err);
    });

}

function clearAll(){
  console.log('clearing ALL data');

  return romis.keys(keyPrefix+'*').then(function(keys){

    if(keys && keys.length) {
      console.log('clearing keys ('+keys.length +'): '+ keys.join(', '));
      return BPromise.map(keys, clearData);
    }

    return undefined;
  });

}

module.exports = {


  GetData: getData,
  SetData: setData,
  ClearData: clearData,
  ClearAll: clearAll

};