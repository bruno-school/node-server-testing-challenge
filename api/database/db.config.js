const knex = require('knex')
const config = require('../../knexfile')
const eviroment = process.env.NODE_ENV || 'development'

module.exports = knex(config[eviroment])
