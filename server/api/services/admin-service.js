const config = require('config')
const Joi = require('joi')
const mongoose = require('mongoose')
const {User, USER_ROLES} = require('../model/User')
const AppError = require('../errors/app-error')
const appModules = require('../app-modules')
const {userValidationSchema} = require('../model/User')

const validateAdmin = async (userData) => {
	try {
        const adminSchema = userValidationSchema.append({
            adminSecret: Joi.string().required()
        })
		const results = adminSchema.validate(userData)
		if (results.error) {
			throw new AppError("400-VAD-000" , appModules.ADMIN, null, results.error)
		}

		return results.value
	} catch (err) {
		if (!(err instanceof AppError)) {
			throw new AppError("500-VAD-000", appModules.ADMIN, err)
		}
		throw err
	}
}

/**
 * 
 * @todo this create user should be directly implemented from the user service
 * 
 */
const createUser = async (userObj, createdBy) => {
	try {
		const user_id = new mongoose.Types.ObjectId()

		let userData = {
			_id: user_id,
			user_id,

			...userObj,
			created_by_id: createdBy || user_id,
			updated_by_id: createdBy || user_id,
        }

        let newUser
		try {
			newUser = new User(userData)
			await newUser.save()
		} catch (err) {
            if(err.code === 11000) {
                throw new AppError('400-CUS-000', appModules.ADMIN, err)
            }
            throw err
        }

		return newUser
	} catch (err) {
		if (!(err instanceof AppError)) {
			throw new AppError("500-CUS-000", appModules.ADMIN, err)
		}
		throw err
	}
}

const createMasterAdmin = async (adminData, adminSecret, userId) => {
    try {
        if(adminSecret !== config.get('adminsecret')) throw new AppError('403-ADM-000', appModules.ADMIN)
        adminData.role = USER_ROLES.MASTERADMIN
        const newAdmin = await createUser(adminData, userId)
        return newAdmin
    } catch(err) {
        if(!(err instanceof AppError)) {
            throw new AppError('500-ADM-000', appModules.ADMIN, err)
        }
        throw err
    }
}

const createAdmin = async (adminData, userId) => {
    try {
        adminData.role = USER_ROLES.ADMIN
        const newAdmin = await createUser(adminData, userId)
        return newAdmin
    } catch(err) {
        if(!(err instanceof AppError)) {
            throw new AppError('500-ADM-001',appModules.ADMIN, err)
        }
        throw err
    }
}

module.exports = {
    createMasterAdmin,
    validateAdmin,
    createUser, 
    createAdmin
}