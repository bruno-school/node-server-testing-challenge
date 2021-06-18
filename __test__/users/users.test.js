const server = require('../../api/server') // Link to your server file
const supertest = require('supertest')
const request = supertest(server)

describe('Users [/api/users]', () => {
	test('should fetch users and return a 200 status', async () => {
		const res = await request.get('/api/users')

		expect(res.status).toBe(200)
	})
	test('should fetch a single user by id and return a 200 status', async () => {
		const res = await request.get('/api/users/1')
		const input = {
			user_id: 1,
			user_username: 'bruno',
			user_password: 'rowValue2',
			user_email: 'brunopaula@yahoo.com',
		}

		expect(res.body).toMatchObject(input)
	})
})
