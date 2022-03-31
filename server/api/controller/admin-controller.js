const {validateAdmin, createMasterAdmin, createAdmin:createAdminService} = require('../services/admin-service')
const {validateUser} = require('../services/user-service')
const {toServerFormat} = require('../payload/request/user-request')
const {toClientFormat} = require('../payload/response/user-response')

module.exports = {
    // master admin
    createMaster: async (req, res) => {
        const validatedData = await validateAdmin(req.body)
		const userData = toServerFormat(validatedData)
		const newUser = await createMasterAdmin(userData, req.body.adminSecret)
		res.status(201).send(toClientFormat(newUser))
    }, 

    createAdmin: async (req, res) => {
        const validatedData = await validateUser(req.body)
        const userData = toServerFormat(validatedData)
        const newAdmin = await createAdminService(userData, req.body.user_id)
        res.status(201).send(toClientFormat(newAdmin))
    }
}