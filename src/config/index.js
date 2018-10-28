const {
  PORT=3000,
  NODE_ENV='development'
} = process.env

exports.PORT = PORT
exports.log = console.log
exports.database = require('./sequelize.config')[ NODE_ENV ]
