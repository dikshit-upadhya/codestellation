const router = require('express').Router()

const {router: userRoutes} = require('./user-routes')
const {router:adminRoutes} = require('./admin-routes')

router.use('', userRoutes)
router.use('', adminRoutes)

module.exports = {router}