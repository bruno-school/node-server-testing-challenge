const request = require('supertest')
const server = require('../api/server')
const index = require('../index')
// const db = require('../data/db-config')

// beforeAll(async () => {
// 	//await db.migrate.rollback()
// 	//	await db.migrate.latest()
// })
// beforeEach(async () => {
// 	//await db.seed.run()
// })
// afterAll(async (done) => {
// 	//await db.destroy()
// 	//	done()
// })

describe('server.js', () => {
	it('is the correct testing environment', async () => {
		expect(process.env.NODE_ENV).toBe('testing')
	})
	it('should run the API correctly', () => {
		// console.log(server.listen())
		expect(server.listen()).toMatch(
			'listen EADDRINUSE: address already in use :::5000'
		)
	})
})
