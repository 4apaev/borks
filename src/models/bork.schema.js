const { NOW, DATE, UUID, UUIDV4, STRING } = require('sequelize')

exports.id = {
  type: UUID,
  primaryKey: true,
  defaultValue: UUIDV4,
}

exports.name = {
  type: STRING,
  validate: {
    is: /^[\w ]+$/i,
    len: [ 2 ],
  }
}

exports.dob = {
  type: DATE,
  defaultValue: NOW,
  validate: {
    isDate: true,
    isBefore: NOW,
  }
}

exports.breed = STRING
exports.createdAt = { type: DATE, field: 'created' }
exports.updatedAt = { type: DATE, field: 'updated' }
