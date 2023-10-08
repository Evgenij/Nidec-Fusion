require('dotenv').config()
const express = require('express')
const { typeMessage, message} = require("../console");
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 8000

const app = express()

app.get('/', (req, res)=>{
	res.send('All is worked')
})

const start = async () => {
	try {
		await sequelize.authenticate().then(()=>{
			message(typeMessage.success, `DB is connected`)
		})
		await sequelize.sync().then(()=>{
			message(typeMessage.success, `DB is synchronized`)
		})
			app.listen(PORT, ()=>{
				message(typeMessage.info, `server is started in ${PORT} port`)
			}
		)
	} catch (e) {
		console.log(e)
	}
}

start()

