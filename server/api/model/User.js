const mongoose = require("mongoose")
const Joi = require('joi')

const {generateHash, comparePasswordToHash} = require('../utils/password-utils')

const USER_ROLES = {
    MASTERADMIN: 'MASTERADMIN',
    ADMIN: 'ADMIN', 
    USER: 'USER'
}

const userSchema = new mongoose.Schema({
    user_id: String, 
	name: String,
	phone_number: {
        type: String,
        unique: true, 
    },
    email: {
        type: String, 
        unique: true,
    }, 
    astu_roll_number: String,
    semester: {
        type: Number, 
        enum: [1,2,3,4,5,6,7,8]
    },
    branch: String,
    password: String, 
    role: {
        default: USER_ROLES.USER,
        type: String, 
        enum: USER_ROLES
    },
    club_ids: {
        type: Array,
        default: []
    },
    created_by_id: String, 
    updated_by_id: String,
}, {
    timestamps: true
})

userSchema.pre('save', function(next ) {
    let user = this;

    if(!user.isModified('password')) return next()

    user.password = generateHash(user.password)
    next() 
}) 

let User = mongoose.model('User', userSchema)


const userValidationSchema = Joi.object({
    name: Joi.string().required().min(1),
    phoneNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    email: Joi.string().email().required(), 
    password: Joi.string().required().min(5), 
    astuRollNumber: Joi.string().required(),
    semester: Joi.number().required().min(0).max(8),
    branch: Joi.string().required()
})


module.exports = {
    User, 
    userValidationSchema, 
    USER_ROLES
}