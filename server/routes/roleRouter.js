const Router = require('express')
const roleRouter = new Router()
const RoleController = require('../controllers/RoleController')

roleRouter.get('/', RoleController.getAll)
roleRouter.post('/create', RoleController.create)

module.exports = roleRouter