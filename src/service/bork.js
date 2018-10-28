const Bork = require('../models')

const Servise = {
  Bork,

  async add(body) {
    const [ bork ] = await Bork.upsert(body, { returning: true })
    return bork.toJSON()
  },

  async get(where) {
    const res = await Bork.findAndCountAll({ where })
    return res
  },

  async put(where, body) {
    const res = await Bork.update(body, { where, returning: true })
    return res
  },

  async del(where) {
    const res = await Bork.destroy({ where, returning: true })
    return res
  },

}

module.exports = Servise



