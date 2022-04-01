const AppError = require("../errors/app-error")
const appModules = require("../app-modules")
const mongoose = require("mongoose")
const { Announcement, announcementValidationSchema} = require('../model/Announcement')

const validateAnnouncement = async (announcementData) => {
    try {
        const results = announcementValidationSchema.validate(announcementData)
        if(results.error) {
            throw new AppError(
                '400-CAN-000', appModules.ANNOUNCEMENT, null, results.error
            )
        }
        return results.value
    } catch(err) {
        if(!(err instanceof AppError)) {
            throw new AppError('500-CAN-000', appModules.ANNOUNCEMENT, err)
        }
        throw err
    }
}

const createAnnouncement = async (announcementData, userId) => {
    try {
        const announcement_id = new mongoose.Types.ObjectId()
        let data = {
            _id: announcement_id, 
            announcement_id, 
            announcement_date: new Date(), 
            ...announcementData, 
            created_by_id: userId || null, 
            updated_by_id: userId || null
        }

        let newAnnouncement
        try {
			newAnnouncement = new Announcement(data)
			await newAnnouncement.save()
		} catch(err) {
            if(err.code === 11000) {
                throw new AppError('400-CAN-000', appModules.ANNOUNCEMENT, err)
            }
            throw err
        }

        return newAnnouncement

    } catch(err) {
        if(!(err instanceof AppError)) {
            throw new AppError('500-CAN-001', appModules.ANNOUNCEMENT, err)
        }
        throw err
    }
}

module.exports = {
    createAnnouncement, 
    validateAnnouncement
}