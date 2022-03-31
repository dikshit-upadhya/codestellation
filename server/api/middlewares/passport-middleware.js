const session = require("express-session")
const passport = require("passport")
const config = require("config")
const MongoStore = require("connect-mongo")
const LocalStrategy = require("passport-local").Strategy
const { comparePasswordToHash } = require("../utils/password-utils")
const AppError = require("../errors/app-error")
const appModules = require("../app-modules")
const { User } = require("../model/User")

const authenticateUser = async (phoneNumber, password, done) => {
	try {
		const user = await User.findOne({ phone_number: phoneNumber })
		if (!user) {
			throw new AppError("404-AUT-000", appModules.USER)
		}
		if (!comparePasswordToHash(password, user.password)) {
			throw new AppError("401-AUT-000", appModules.USER)
		}
		return done(null, user)
	} catch (err) {
		if (!(err instanceof AppError)) {
			done(new AppError("500-AUT-000", appModules.USER, err))
		}
		done(err)
	}
}


class SessionId {
	constructor(model, userId) {
		this.model = model
		this.userId = userId
	}

	static userModel(userId) {
		return new SessionId("users", userId)
	}
}

const configureAppForSessions = (app) => {
	app.use(
		session({
			saveUninitialized: false,
			resave: false,
			secret: config.get("appsecret"),
			store: MongoStore.create({
				mongoUrl: config.get("database"),
			}),
		})
	)

	app.use(passport.initialize())
	app.use(passport.session())

	passport.use(
		"local",
		new LocalStrategy(
			{
				usernameField: "phoneNumber",
				passwordField: "password",
			},
			authenticateUser
		)
	)

	passport.serializeUser(function (user, done) {
		done(null, SessionId.userModel(user.user_id))
	})

	passport.deserializeUser(async (sessionObj, done) => {
		const model = sessionObj.model
		const userId = sessionObj.userId

		const user = await User.findOne({ user_id: userId })
		if (!user) {
			err = new AppError("404-USER-001", appModules.USER)
			return done(err)
		}
		return done(null, user)
	})
}

const checkAuthenticated = async (req, res, next) => {
	try {
		if (req.isAuthenticated()) {
			return next()
		}
		throw new AppError("401-AUT-001", appModules.USER)
	} catch (err) {
		if (!(err instanceof AppError)) {
			throw new AppError("500-AUT-001", appModules.USER)
		}
		throw err
	}
}

const acceptedRoles = (validRoles) => async (req, res, next) => {
	try {
		if (validRoles.includes(req.user.role)) {
			return next()
		}
		throw new AppError("403-AUT-000", appModules.USER)
	} catch (err) {
		if (!(err instanceof AppError)) {
			throw new AppError("500-AUT-002", appModules.USER)
		}
		throw err
	}
}

module.exports = { configureAppForSessions, checkAuthenticated, acceptedRoles }
