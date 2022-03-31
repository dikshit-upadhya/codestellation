const router = require('express').Router()
const handleAsync = require('../middlewares/async-error-handler')
const userController = require('../controller/user-controller')
const passport = require('passport')
const {checkAuthenticated} = require('../middlewares/passport-middleware')


router.post('/user', handleAsync(userController.signup))
router.post('/user/login', handleAsync(passport.authenticate('local')), handleAsync(userController.login))
router.get('/user', handleAsync(checkAuthenticated), handleAsync(userController.getUser))
router.post('/user/logout', handleAsync(checkAuthenticated), handleAsync(userController.logout))


module.exports = {router}