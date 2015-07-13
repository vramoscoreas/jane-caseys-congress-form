module.exports = {
  redisUrl:  process.env.REDISCLOUD_URL || 'redis://localhost:6379',

  //default: 30 minutes
  redisExpirationSeconds: parseInt(process.env.REDIS_EXPIRE_TIME) || 60 * 30

};