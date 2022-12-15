module.exports = {
  HOST: '34.70.42.160',
  USER: 'masterdb',
  PASSWORD: 'masterdb',
  DB: "mefora_development",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
