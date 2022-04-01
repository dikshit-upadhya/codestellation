const appModules = require('../../app-modules')
const general = require('./general')
const user = require('./user')
const admin = require('./admin')
const club = require('./club')
const announcement = require('./announcement')
const event = require('./event')

module.exports = {
    [appModules.GENERAL]: general, 
    [appModules.USER]: user,  
    [appModules.ADMIN]: admin, 
    [appModules.CLUB]: club, 
    [appModules.ANNOUNCEMENT]: announcement, 
    [appModules.EVENT]: event
}