exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('users')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('users').insert([
				{
					user_username: 'bruno',
					user_password: 'rowValue2',
					user_email: 'brunopaula@yahoo.com',
				},
				{
					user_username: 'Peter',
					user_password: 'rowValu876hgfy',
					user_email: 'peter@aol.com',
				},

				{
					user_username: 'Mary',
					user_password: 'rowV2!u876435fsfy',
					user_email: 'mary@aol.com',
				},

				{
					user_username: 'Bob',
					user_password: 'rowVa34t99fsd#876hgfy',
					user_email: 'bob@aol.com',
				},
			])
		})
}
