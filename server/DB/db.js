const Pool = require('pg').Pool
const pool = new Pool({
	user: 'postgres',
	password: 'root',
	host: 'localhost',
	port: process.env.PORT_DB || 5432,
	database: 'nidec_db'
})

module.exports = pool
