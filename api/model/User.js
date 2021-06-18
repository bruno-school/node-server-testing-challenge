const db = require('../database/db.config')

const index = () => {
	return db('users')
}

const findById = (id) => {
	return db('users').where('user_id', id).first()
}

module.exports = {index, findById}
