const router = require('express').Router()

const {router: userRoutes} = require('./user-routes')
const {router:adminRoutes} = require('./admin-routes')
const {router:clubRoutes} = require('./club-routes')
const {router:announcementRoutes} = require('./announcement-routes')
const {router:eventRoutes} = require('./event-routes')

router.use('', userRoutes)
router.use('', adminRoutes)
router.use('', clubRoutes)
router.use('', announcementRoutes)
router.use('', eventRoutes)

module.exports = {router}