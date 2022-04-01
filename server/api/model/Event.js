const mongoose = require('mongoose')
const Joi = require('joi')

const eventSchema = new mongoose.Schema({
    event_id: {
        type: String, 
        unique: true
    }, 
    event_name: String,
    event_desc: String,
    prize_money: Number,
    club_id: String,
    registration_fees: Number,
    rules: String,
    venue: String,
    phone_number: String,
    email: String,
    created_by_id: String,
    updated_by_id: String
}, {
    timestamps: true
})

let Event = mongoose.model('Event', eventSchema)

const eventValidationSchema = Joi.object({
    eventName: Joi.string().required(),
    eventDesc: Joi.string().required(),
    prizeMoney: Joi.number().required(),
    registrationFees: Joi.number().required(),
    rules: Joi.string().required(),
    venue: Joi.string().required(),
    phoneNumber:  Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    email: Joi.string().email(), 
    clubId: Joi.string().required(),
})

module.exports = {
    Event, 
    eventValidationSchema
}