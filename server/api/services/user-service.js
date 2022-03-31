const mongoose = require("mongoose")

const AppError = require("../errors/app-error")
const appModules = require("../app-modules")
const { User, userValidationSchema } = require("../model/User")

const validateUser = async (userData) => {
	try {
		const results = userValidationSchema.validate(userData)
		if (results.error) {
			throw new AppError("400-USER-000", appModules.USER, null, results.error)
		}

		return results.value
	} catch (err) {
		if (!(err instanceof AppError)) {
			throw new AppError("500-USER-000", appModules.USER, err)
		}
		throw err
	}
}

const getUserById = async (userId) => {
	try {
		const user = await User.findOne({ user_id: userId })
		if (!user) {
			throw new AppError("404-USER-000", appModules.USER)
		}
		return user
	} catch (err) {
		if (!(err instanceof AppError)) {
			throw new AppError("500-USER-001", appModules.USER, err)
		}
		throw err
	}
}

const getUserByEmail = async (userEmail) => {
	try {
		const user = await User.findOne({ email: userEmail })
		if (!user) {
			throw new AppError("404-USER-001", appModules.USER)
		}
		return user
	} catch (err) {
		if (!(err instanceof AppError)) {
			throw new AppError("500-USER-002", appModules.USER, err)
		}
		throw err
	}
}

const signupUser = async (userObj) => {
	try {
		const user_id = new mongoose.Types.ObjectId()

		let userData = {
			_id: user_id,
			user_id,

			...userObj,

			created_by_id: user_id,
			updated_by_id: user_id,
		}

        let newUser
		try {
			newUser = new User(userData)
			await newUser.save()
		} catch (err) {
            if(err.code === 11000) {
                throw new AppError('400-USER-001', appModules.USER, err)
            }
            throw err
        }

		return newUser
	} catch (err) {
		if (!(err instanceof AppError)) {
			throw new AppError("500-USER-003", appModules.USER, err)
		}
		throw err
	}
}

module.exports = {
	validateUser,
	getUserById,
	getUserByEmail,
	signupUser,
}
