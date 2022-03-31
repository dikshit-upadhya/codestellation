const mongoose = require('mongoose')
const config = require('config')

const authTests = require("./modules/auth.test")
const masterAdminTests = require('./modules/masterAdmin.test')
const adminTests = require('./modules/admin.test')

describe("API Tests", function () {

    before(function (done) {
        mongoose.connect(config.get('database'))

        mongoose.connection.once('open', function() {
            done()
        })
    })

    after(function(done) {
        mongoose.connection.close(function() {
            done()
        })
    })

    describe("1. User creation and authentication", authTests.bind(this))
    describe("2. Master Admin creation and authentication", masterAdminTests.bind(this))
    describe("3. Admin creation and authentication", adminTests.bind(this))

})