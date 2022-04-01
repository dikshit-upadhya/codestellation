const mongoose = require('mongoose')
const Joi = require('joi')

const announcementSchema = new mongoose.Schema({
    announcement_id: {
        type: String,
        unique: true
    },
    announcement_date: Date, 
    announcement_desc: String,
    club_id: String,
    announcement_type: {
        type: String,
        enum: ['PUBLIC', 'PRIVATE']
    },
    created_by_id: String,
    updated_by_id: String
}, {
    timestamps: true
})

let Announcement = mongoose.model('Announcement', announcementSchema)

const announcementValidationSchema = Joi.object({
    announcementDesc: Joi.string().required(),
    clubId: Joi.string().required(),
    announcementType: Joi.string().required()
})

module.exports = {
    Announcement,
    announcementValidationSchema
}