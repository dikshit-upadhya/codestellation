const router = require('express').Router()

const {router: userRoutes} = require('./user-routes')
const {router:adminRoutes} = require('./admin-routes')
const {router:clubRoutes} = require('./club-routes')

router.use('', userRoutes)
router.use('', adminRoutes)
router.use('', clubRoutes)

module.exports = {router}