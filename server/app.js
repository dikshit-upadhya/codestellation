global.debug = require("debug")("server:debug")
const config = require('config')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bp = require('body-parser')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')

const appErrorHandler = require('./api/middlewares/app-error-handler')
const unknownRoutesHandler = require('./api/middlewares/unknown-routes-handler')
const {router: apiRoutes} = require('./api/routes')

if(process.env.NODE_ENV !== 'test') {
    require('./db/dbConnection')
}

const app = express()

if(process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'))
}
app.use(bp.urlencoded({extended: false}))
app.use(bp.json())
app.use(cors())

require('./api/middlewares/passport-middleware').configureAppForSessions(app)

app.use('/api', apiRoutes)

app.all('*', unknownRoutesHandler)

app.use(appErrorHandler)

if(!module.parent) {
    app.listen(config.get("port"), () => {
        debug(`server is running on port ${config.get("port")} and in ${config.get("name")} mode`)
        if(process.env.NODE_ENV === 'production') {
            console.log(`server is running on port ${config.get("port")} and in ${config.get("name")} mode`)
        }
    })
}

module.exports = app
