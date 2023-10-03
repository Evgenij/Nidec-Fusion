const express = require('express')
const userRouter = require('./routes/index')
const { typeMessage, message} = require("../console");

const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, ()=>{
	message(typeMessage.success, `server is started in ${PORT} port`)
})