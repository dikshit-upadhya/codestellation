const appModules = require('../../app-modules')
const general = require('./general')
const user = require('./user')
const admin = require('./admin')
const club = require('./club')

module.exports = {
    [appModules.GENERAL]: general, 
    [appModules.USER]: user, 
    [appModules.ADMIN]: admin, 
    [appModules.CLUB]: club
}