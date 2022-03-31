const { validateUser, signupUser } = require("../services/user-service")
const { toClientFormat } = require("../payload/response/user-response")
const { toServerFormat } = require("../payload/request/user-request")

module.exports = {
	signup: async (req, res) => {
		const validatedData = await validateUser(req.body)
		const userData = toServerFormat(validatedData)
		const newUser = await signupUser(userData)
		res.status(201).send(toClientFormat(newUser))
    },
    
    login: (req, res) =>  {
        const user = req.user
        res.status(200).send(toClientFormat(user))
    }, 

    getUser: (req, res) => {
        const user = req.user
        res.status(200).send(toClientFormat(user))
    }, 

    logout: async (req, res) => {
        await req.session.destroy()
        await req.logout()
        res.status(204).send({})
    }
}
