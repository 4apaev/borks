const schema = require('../models/bork.schema')

exports.up = qi => qi.createTable('Borks', schema, { timestamps: true })
exports.down = qi => qi.dropTable('Borks')
