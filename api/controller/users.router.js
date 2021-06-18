const router = require('express').Router()
const User = require('../model/User')

router.get('/', async (req, res) => {
	const data = await User.index()
	res.status(200).json(data)
})

router.get('/:id', async (req, res) => {
	const data = await User.findById(req.params.id)
	res.status(200).json(data)
})
module.exports = router
