const {toServerFormat} = require('../payload/request/event-request')
const {toClientFormat} = require('../payload/response/event-response')
const {validateEvent, createEvent} = require('../services/event-service')

module.exports = {
    create: async (req, res) => {
        const validatedData = await validateEvent(req.body)
        const eventData = toServerFormat(validatedData)
        const newEvent = await createEvent(eventData, req.user.user_id)
        res.status(201).send(toClientFormat(newEvent))
    }
}