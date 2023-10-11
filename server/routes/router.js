const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const workshiftRouter = require('./workshiftRouter')
const roleRouter = require('./roleRouter')

router.use('/user', userRouter)
router.use('/workshifts', workshiftRouter)
router.use('/roles', roleRouter)

module.exports = router