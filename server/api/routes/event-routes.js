const router = require('express').Router()
const handleAsync = require('../middlewares/async-error-handler')
const eventController = require('../controller/event-controller')
const {
	checkAuthenticated,
	acceptedRoles,
} = require("../middlewares/passport-middleware")
const { USER_ROLES } = require("../model/User")

router.post('/event', handleAsync(checkAuthenticated), handleAsync(acceptedRoles([USER_ROLES.MASTERADMIN, USER_ROLES.ADMIN])), handleAsync(eventController.create))

module.exports = {router}