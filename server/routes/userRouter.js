const Router = require('express')
const userRouter = new Router()
const userController = require('../controllers/UserController')

userRouter.post('/registration', userController.registration)
userRouter.post('/login', userController.login)
userRouter.get('/test', userController.test)

module.exports = userRouter