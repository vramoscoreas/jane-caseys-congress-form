var port = process.env.PORT;

module.exports = {
  app: {
    port: port,
    pub_dir: '/public',
    cookie_secret: 'Your secret key salt goes here. Replace with random, ' +
      'long string in your project.'
  }
};