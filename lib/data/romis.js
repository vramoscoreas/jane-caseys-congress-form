var romis = require('romis');
var url = require('url');

var redisUrl = require('../../config/redis').redisUrl;

function createRedisClient() {
  var redisServer = url.parse(redisUrl);

  var client = romis.createClient(redisServer.port, redisServer.hostname);

  if(redisServer.auth) {
    client.auth(redisServer.auth.match(/.+:(.*)/)[1]).
      catch(function (reason) {
        throw reason; //throw since we're fucked.
      });
  }
  return client;
}

module.exports = createRedisClient();
