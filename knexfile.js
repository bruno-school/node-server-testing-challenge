// Update with your config settings.
require('dotenv').config()
module.exports = {
	development: {
		client: 'postgresql',
		connection: process.env.DEV_DB_URL,
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: './api/database/migrations',
		},
		seeds: {
			directory: './api/database/seeds',
		},
	},

	testing: {
		client: 'postgresql',
		connection: process.env.TEST_DB_URL,
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: './api/database/migrations/test',
		},
		seeds: {
			directory: './api/database/seeds/test',
		},
	},

	production: {
		client: 'postgresql',
		connection: process.env.DB_URL,
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: './api/database/migrations/',
		},
		seeds: {
			directory: './api/database/seeds/',
		},
	},
}
