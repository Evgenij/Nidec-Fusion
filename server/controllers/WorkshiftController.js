const {Workshift} = require("../models/models");

class WorkshiftController {

	async create(req,res) {
		const {name} = req.body
	    const data = await Workshift.create({
		    name
	    })
	    return res.status(200).json(data)
	}

	async getAll(req, res) {
		try {
			const workshifts = await Workshift.findAll()

			return res.status(200).json(workshifts)
		} catch (e) {
			console.log(e)
		}
	}
}

module.exports = new WorkshiftController()