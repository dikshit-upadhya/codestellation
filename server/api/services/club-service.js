const AppError = require("../errors/app-error")
const appModules = require("../app-modules")
const mongoose = require("mongoose")
const { Club, clubValidationSchema } = require("../model/CLub")
const { User } = require('../model/User')

const validateClub = async (clubData) => {
	try {
		const results = clubValidationSchema.validate(clubData)
		if (results.error) {
			throw new AppError(
				"400-CCL-000",
				appModules.CLUB,
				null,
				results.error
			)
		}
		return results.value
	} catch (err) {
		if (!(err instanceof AppError)) {
			throw new AppError("500-CCL-000", appModules.CLUB, err)
		}
		throw err
	}
}

const createClub = async (clubData, createdBy, admin) => {
	try {
		const club_id = new mongoose.Types.ObjectId()

		let clubsData = {
			_id: club_id,
			club_id,
			...clubData,
			created_by_id: createdBy || null,
			updated_by_id: createdBy || null,
		}

		let newClub
		try {
			newClub = new Club(clubsData)
			await newClub.save()
		} catch(err) {
            if(err.code === 11000) {
                throw new AppError('400-CCL-000', appModules.CLUB, err)
            }
            throw err
        }
        
        let admin = await User.findOne({user_id: createdBy})
        admin.club_ids = admin.club_ids.push(club_id)
        await admin.save()

		return newClub
	} catch (err) {
        if(!(err instanceof AppError)) {
            throw new AppError('500-CCL-000', appModules.CLUB, err)
        }
        throw err
    }
}

const getAllClubs = async () => {
    try {
        let clubs = await Club.find()
        return clubs
    } catch(err) {
        if(!(err instanceof AppError)) {
            throw new AppError('500-GCL-000', appModules.CLUB, err)
        }
        throw err
    }
}

const getClubById = async (clubId) => {
    try {
        let club = await Club.findOne({club_id: clubId})
        if(!club) {
            throw new AppError('404-GCL-000', appModules.CLUB)
        }
        return club
    } catch(err) {
        if(!(err instanceof AppError)) {
            throw new AppError('500-GCL-001', appModules.CLUB, err)
        }
        throw err
    }
}

const joinClubForUser = async (clubId, userId) => {
    try {
        let user = await User.findOne({user_id: userId})
        let club = await getClubById(clubId)
        user.club_ids.push(club.club_id)
        console.log(user, club)
        await user.save()
        return
    } catch(err) {
        if(!(err instanceof AppError)) {
            throw new AppError('500-JCL-000', appModules.CLUB, err )
        }
        throw err
    }
}

module.exports = {
	createClub,
    validateClub,
    getAllClubs, 
    getClubById, 
    joinClubForUser
}
