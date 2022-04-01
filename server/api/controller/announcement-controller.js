const {validateAnnouncement, createAnnouncement} = require('../services/announcement-service')
const {toServerFormat} = require('../payload/request/announcement-request')
const {toClientFormat} = require('../payload/response/announcement-response')


module.exports = {
    create: async (req, res) => {
        let validatedObj = await validateAnnouncement(req.body)
        let announcementData = toServerFormat(validatedObj)
        let newAnnouncement = await createAnnouncement(announcementData, req.user.user_id)
        res.status(201).send(toClientFormat(newAnnouncement ))
    }, 
     
}