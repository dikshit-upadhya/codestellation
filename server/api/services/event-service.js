const AppError = require("../errors/app-error")
const appModules = require("../app-modules")
const mongoose = require("mongoose")
const {Event, eventValidationSchema} = require('../model/Event')

const validateEvent = async (eventData) => {
    try {
        const results = eventValidationSchema.validate(eventData)
        if(results.error) {
            throw new AppError('400-CEV-000', appModules.EVENT, null, results.error)
        }
        return results.value
    } catch(err) {
        if(!(err instanceof AppError)) {
            throw new AppError('500-CEV-000', appModules.EVENT, err)
        }
        throw err
    }
}

const createEvent = async (eventData, userId) => {
    try {   
        const event_id = new mongoose.Types.ObjectId()
        let data = {
            _id: event_id, 
            event_id, 
            ...eventData, 
            created_by_id: userId || null, 
            updated_by_id: userId || null
        }
        
        let newEvent
        try {
			newEvent = new Event(data)
			await newEvent.save()
		} catch(err) {
            if(err.code === 11000) {
                throw new AppError('400-CAN-000', appModules.EVENT, err)
            }
            throw err
        }

        return newEvent
    } catch(err) {
        if(!(err instanceof AppError)) {
            throw new AppError('500-CEV-001', appModules.EVENT, err)
        }
        throw err
    }
}

module.exports = {
    validateEvent, 
    createEvent
}