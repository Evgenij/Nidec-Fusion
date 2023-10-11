const ApiError = require('../error/ApiError')
const {User} = require("../models/models");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserDTO = require("../dto/UserDTO");
const {message, typeMessage} = require("../../console");

const generateJWT = (id, username, role) => {
	return jwt.sign(
		{id, username, role},
		process.env.SECRET_KEY_JWT,
		{
			expiresIn: '24h'
		}
	)
}

class UserController {
	async registration(req, res, next) {
		try {
			const {name, surname, email, password, roleId, workshiftId} = req.body

			if(!password) {
				return next(ApiError.badRequest('Password don`t empty'))
			}

			const candidate = await User.findOne({where: {name, surname}})
			if(candidate) {
				return next(ApiError.badRequest('User has been added'))
			}

			const hashPassword = await bcrypt.hash(password, 3)
			const username = name.toLowerCase() + '.' + surname.toLowerCase()

			let userData = {...UserDTO, name, surname, username,
				password: hashPassword,
				roleId, workshiftId
			}
			if (email) {
				userData = {...userData, email}
			}

			const newUser = await User.create(userData)
			const token = generateJWT(newUser.id, username, roleId)

			return res.status(200).json({user: newUser, token})
		} catch (e) {
			console.log(e)
		}
	}

	async login(req, res, next) {
		try {
			const {username, password} = req.body

			const user = await User.findOne({where: {username}})
			if(!user) {
				return next(ApiError.badRequest(`User with login - ${username} don\`t found...`))
			}

			let comparePassword = bcrypt.compareSync(password, user.password)
			if(!comparePassword) {
				return next(ApiError.badRequest(`Password is incorrect`))
			}

			const token = generateJWT(user.id, user.username, user.roleId)

			return res.status(200).json({user, token})
		} catch (e) {
			console.log(e)
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