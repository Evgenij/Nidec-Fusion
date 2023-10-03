const Router = require('express')
const router = new Router()
const userController = require('../controllers/UserController')

router.post('/registration', userController.registration)
router.put('/user/:id', userController.update)
router.delete('/user/:id', userController.delete)
router.get('/user/:id', userController.getByID)

module.exports = router