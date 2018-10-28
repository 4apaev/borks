const Sequelize = require('sequelize')
const { database, log } = require('../config')

const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password,
  database,
)

sequelize.authenticate().then(() => {
  log('Connection has been established successfully.')
})

module.exports = {
  log,
  sequelize,
  Sequelize,
  get models() { return sequelize.models },

  async sync() {
    await sequelize.query(`DELETE FROM "Borks"`)
  },

  async Sync() {
    const tables = Object.values(sequelize.models)
    await Promise.all(tables.map(t => sequelize.query(`DELETE FROM "${ t.tableName }"`)))
  }
}
