const ApiError = require('../error/ApiError')

class UserController {
	async registration(req, res) {
		try {

		} catch (e) {

		}
	}

	async login(req, res) {
		try {

		} catch (e) {

		}
	}

	async test(req, res, next) {
		//console.log(req.query)

		const {id} = req.query

		try {
			if(!id) {
				return next(ApiError.badRequest('Error!!!'))
			}
			return res.json(id)
		} catch (e) {

		}
	}
}

module.exports = new UserController()