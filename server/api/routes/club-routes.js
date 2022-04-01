const router = require("express").Router()
const handleAsync = require("../middlewares/async-error-handler")
const clubController = require("../controller/club-controller")
const {
	checkAuthenticated,
	acceptedRoles,
} = require("../middlewares/passport-middleware")
const { USER_ROLES } = require("../model/User")

router.post("/club", handleAsync(checkAuthenticated), handleAsync(acceptedRoles([USER_ROLES.MASTERADMIN, USER_ROLES.ADMIN])), handleAsync(clubController.createClub))
router.get('/clubs', handleAsync(clubController.getAllClubs))
router.get('/club/:clubId', handleAsync(clubController.getClubByClubId))
router.post('/club/:clubId/join', handleAsync(checkAuthenticated), handleAsync(clubController.joinClub))

module.exports = { router }
