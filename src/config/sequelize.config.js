
/* istanbul ignore next */
exports.development = exports.production = exports.test = {
  host: 'localhost',
  dialect: 'postgres',
  username: 'postgres',
  password: '',
  database: 'shoshi',
  logging: false,
  typeValidation:true,
  timestamps: true,
  operatorsAliases: false,
}

