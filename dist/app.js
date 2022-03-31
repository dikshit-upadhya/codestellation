const debug = require("debug")("server:debug");
const config = require('config');
const express = require('express');

const app = express();

const listen = app.listen(config.get("port"), () => {
	debug(`server is running on port ${config.get("port")} and in ${config.get("name")} mode`);
	console.log(`server is running on port ${config.get("port")} and in ${config.get("name")} mode`);
});

module.exports = app;
module.exports.port = listen.address().port;

// require('dotenv').config()

// const express = require('express')
// const bp = require('body-parser')
// const cors = require('cors')
// const morgan = require('morgan')

// const appErrorHandler = require('./api/middlewares/app-error-handler')
// const unknownRoutesHandler = require('./api/middlewares/unknown-routes-handler')
// const {router: apiRoutes} = require('./api/routes')

// const app = express()

// // config
// app.use(morgan('dev'))
// app.use(bp.urlencoded({extended: false}))
// app.use(bp.json())
// app.use(cors())

// // for routers
// app.use('', apiRoutes)

// app.all('*', unknownRoutesHandler)

// app.use(appErrorHandler)

// const port = process.env.PORT || 3333
// app.listen(port, () => {
//     console.log(`App is up on port ${port}`)
// })
//# sourceMappingURL=app.js.map