// const { keys, assign, entries } = Object

const { log, sequelize } = require('../repository')
const schema = require('./bork.schema')

const Bork = sequelize.define('Bork', schema, {
  tableName: 'Borks',
  timestamps: true,
})

Bork.addHook('validationFailed', 'fail', (ctx, opt, e) => {
  log('validationFailed ERR\n\n', e)
  log('validationFailed OPT\n\n', opt)
  log('validationFailed CTX\n\n', ctx)
})

module.exports = Bork



// const classMethods = {

//   async post({ dob, name, breed }) {
//     const res = await this.upsert({ dob, name, breed }, { returning: true })
//     return res
//   },

//   async get({ id, ...opt }) {
//     const res = id
//       ? await this.findAll({ id, limit: 1, rejectOnEmpty: true })
//       : await this.findAndCountAll({ offset: 0, limit: 20, order: 'name DESC', ...opt })
//   },

//   async put(where, { dob, name, breed }) {
//     return this.update({ dob, name, breed }, { returning: true, where })
//   },

//   async del(where) {
//     const res = await this.destroy({ where })
//     return res
//   },

// }

// beforeCreate(name, fn)
// afterCreate(name, fn)

// beforeDestroy(name, fn)
// afterDestroy(name, fn)

// beforeRestore(name, fn)
// afterRestore(name, fn)

// beforeUpdate(name, fn)
// afterUpdate(name, fn)

// beforeFind(name, fn)
// afterFind(name, fn)


// Bork.addHook('beforeValidate', 'prep', (ctx, opt) => {})



// Bork.hook('beforeValidate', (bork, opts) => {
//   console.log('\n\n\n')
//   console.log(opts)
//   console.log('\n\n\n')
//   console.log(bork)
// })


