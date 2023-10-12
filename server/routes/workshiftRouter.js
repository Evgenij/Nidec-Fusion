const Router = require('express')
const workshiftRouter = new Router()
const workshiftController = require('../controllers/WorkshiftController')

workshiftRouter.post('/create', workshiftController.create)
workshiftRouter.get('/', workshiftController.getAll)

module.exports = workshiftRouter