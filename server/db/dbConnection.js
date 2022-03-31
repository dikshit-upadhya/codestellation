const mongoose = require('mongoose')
const config = require('config')

mongoose.connect(config.get('database'), {
    keepAlive: 1, 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})

mongoose.connection.on('error', (err) => {
    debug(`MongoDB connection error. Please make sure your connection is established`)    
    debug(err)
})

mongoose.connection.once('open', () => {
    debug('MongoDB connection started')
})