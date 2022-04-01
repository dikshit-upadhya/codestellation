const mongoose = require('mongoose')
const Joi = require('joi')

const clubSchema = new mongoose.Schema({
    club_id: {
        type: String, 
        unique: true
    }, 
    club_name: String,
    club_desc: String,
    club_fees: Number, 
    created_by_id: String,
    updated_by_id: String,
},{
    timestamps: true
})

let Club = mongoose.model('Club', clubSchema)

const clubValidationSchema = Joi.object({
    clubName: Joi.string().required().min(1),
    clubDesc: Joi.string().required().min(1),
    clubFees: Joi.number().min(0).required(),
})

module.exports = {
    Club, 
    clubValidationSchema
}