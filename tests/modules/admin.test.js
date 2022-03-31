const { expect } = require("chai")
const server = require("../../server/app")
const request = require("supertest")
const { adminModel, masterAdminModel, adminFaultyModel } = require("../model")
const { descUtil, errorUtil } = require("../util")

const agent = request.agent(server)

function adminTests() {
	it(descUtil("post", "api admin", "create admin", "create admin failure due to no masteradmin session"), function (done) {
		let response
		agent.post("/api/admin")
			.send(adminModel)
			.then((res) => {
				response = res
				expect(res.body).to.not.have.property("userId")
				expect(res.body).to.have.property("errorCode")
				expect(res.status).to.equal(401)
				done()
			})
			.catch((err) => {
				debug(response.body)
				done(errorUtil(err))
			})
	})

	it(descUtil("post", "api user login", "login master admin", "login master admin success"), function (done) {
		let response
		agent.post("/api/user/login")
			.send({
				phoneNumber: masterAdminModel.phoneNumber,
				password: masterAdminModel.password,
			})
			.then((res) => {
				response = res
				expect(res.body).to.not.have.property("errorCode")
				expect(res.body).to.have.property("userId")
				expect(res.status).to.equal(200)
				done()
			})
			.catch((err) => {
				debug(response.body)
				done(errorUtil(err))
			})
	})

    it(descUtil("post", "api admin", "create admin", "create admin failure due to inadequate parameters"), function (done) {
        let response 
        agent.post('/api/admin')
            .send(adminFaultyModel)
            .then(res => {
                response = res
                expect(res.body).to.not.have.property('userId')
                expect(res.body).to.have.property('errorCode')
                expect(res.status).to.equal(400)
                done()
            })
            .catch(err => {
                debug(response.body)
                done(errorUtil(err))
            })
    })

	it(descUtil("post", "api admin", "create admin", "create admin by master admin success"), function (done) {
        let response 
        agent.post('/api/admin')
            .send(adminModel)
            .then(res => {
                response = res
                expect(res.body).to.not.have.property('errorCode')
                expect(res.body).to.have.property('userId')
                expect(res.status).to.equal(201)
                let secondResponse
                agent.post('/api/user/logout')
                    .then(secRes => {
                        secondResponse = secRes
                        expect(secRes.status).to.equal(204)
                        done()
                    })
                    .catch(err => {
                        debug(secondResponse.body)
                        done(errorUtil(err))
                    })
            })
            .catch(err => {
                debug(response.body)
                done(errorUtil(err))
            })
    })

    it(descUtil('get',  'api user', 'get admin', 'get admin failure due to no session'), function(done) {
        let response
        agent.get('/api/user')
            .then(res => {
                response = res
                expect(res.body).to.not.have.property('userId')
                expect(res.body).to.have.property('errorCode')
                expect(res.status).to.equal(401)
                done()
            })
            .catch(err => {
                debug(response.body)
                done(errorUtil(err))
            })
    })

    it(descUtil('post', 'api user login', 'login admin', 'admin login success'), function(done) {
        let response 
        agent.post('/api/user/login')
            .send({
                phoneNumber: adminModel.phoneNumber, 
                password: adminModel.password
            })
            .then(res => {
                response = res
                expect(res.body).to.not.have.property('errorCode')
                expect(res.body).to.have.property('userId')
                expect(res.body).to.have.property('phoneNumber', adminModel.phoneNumber)
                done()
            })
            .catch(err => {
                debug(response.body)
                done(errorUtil(err))
            })
    })


    it(descUtil('get',  'api user', 'get admin', 'get admin success due to prevailent session'), function(done) {
        let response
        agent.get('/api/user')
            .then(res => {
                response = res
                expect(res.body).to.not.have.property('errorCode')
                expect(res.body).to.have.property('userId')
                expect(res.body).to.have.property('phoneNumber', adminModel.phoneNumber)
                expect(res.status).to.equal(200)
                done()
            })
            .catch(err => {
                debug(response.body)
                done(errorUtil(err))
            })
    })

    it(descUtil('post', 'api user logout', 'logout admin', 'logout admin success'), function(done) {
        let response
        agent.post('/api/user/logout')
            .then(res => {
                response = res
                expect(res.body).to.not.have.property('errorCode')
                expect(res.body).to.not.have.property('userId')
                expect(res.status).to.equal(204)
                done(0)
            })
            .catch(err => {
                debug(response.body)
                done(errorUtil(err))
            })
    })
}

module.exports = adminTests
