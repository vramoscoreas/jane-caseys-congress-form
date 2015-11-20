
module.exports = {

  postgres: {
    url: process.env.POSTGRES_DB_URL,
    username: process.env.POSTGRES_USERNAME || '',
    password: process.env.POSTGRES_PASSWORD || '',
    server: process.env.POSTGRES_SERVER ||'localhost/postgres'
  },

  captcha:
  {
    old:{
      publicKey:'6LeRdfQSAAAAAG_fUXud4U5gaiQStQ5nWEbUS8Sr',
      privateKey: '6LeRdfQSAAAAAGGvll55GUQHg9HEAKH9QjUrtG6j'
    },
    new: {
      publicKey: '6LdRSAYTAAAAAIF6kPVGPOY-Mg6Qvwca0gdphFxN',
      privateKey: '6LdRSAYTAAAAAIpObr2gN5Ua66yNj0GccY2Euft8'
    }
  }


};