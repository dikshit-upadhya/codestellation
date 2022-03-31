const router = require("express").Router()
const handleAsync = require("../middlewares/async-error-handler")
const adminController = require("../controller/admin-controller")
const {
	checkAuthenticated,
	acceptedRoles,
} = require("../middlewares/passport-middleware")
const passport = require("passport")
const { USER_ROLES } = require("../model/User")

router.post("/admin/master", handleAsync(adminController.createMaster))

router.post(
	"/admin",
	handleAsync(checkAuthenticated),
    handleAsync(acceptedRoles([USER_ROLES.MASTERADMIN])), 
    handleAsync(adminController.createAdmin)
)

module.exports = { router }
