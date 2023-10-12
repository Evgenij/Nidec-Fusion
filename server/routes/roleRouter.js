const Router = require('express')
const roleRouter = new Router()
const RoleController = require('../controllers/RoleController')
const RoleMiddleware = require('../middleware/RoleMiddleware')

roleRouter.get('/', RoleController.getAll)
roleRouter.post('/create', RoleMiddleware(3), RoleController.create)

module.exports = roleRouter