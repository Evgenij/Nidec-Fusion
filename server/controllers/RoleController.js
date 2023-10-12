const {Role} = require("../models/models");
const ApiError = require('../error/ApiError')
class RoleController {
	async create(req, res, next) {
		try {
			const {name} = req.body
			const candidate = await Role.findOne({where: {name}})

			if(candidate) {
				return next(ApiError.badRequest('Role has been added'))
			}

			const newRole = await Role.create({name})
			return res.status(200).json(newRole)

		} catch (e) {
			console.log(e)
		}
	}

	async getAll(req, res) {
		try {
			const roles = await Role.findAll()

			return res.status(200).json(roles)
		} catch (e) {
			console.log(e)
		}
	}
}

module.exports = new RoleController()