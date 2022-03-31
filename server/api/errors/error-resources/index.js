const appModules = require('../../app-modules')
const general = require('./general')
const user = require('./user')
const admin = require('./admin')

module.exports = {
    [appModules.GENERAL]: general, 
    [appModules.USER]: user, 
    [appModules.ADMIN]: admin
}