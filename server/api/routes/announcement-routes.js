const router = require('express').Router()
const handleAsync = require('../middlewares/async-error-handler')
const announcementController = require('../controller/announcement-controller')
const {
    checkAuthenticated, 
    acceptedRoles
} = require('../middlewares/passport-middleware')
const {USER_ROLES} = require('../model/User')

router.post('/announcement', handleAsync(checkAuthenticated), handleAsync(acceptedRoles([USER_ROLES.MASTERADMIN, USER_ROLES.ADMIN])), handleAsync(announcementController.create))

module.exports = {router}