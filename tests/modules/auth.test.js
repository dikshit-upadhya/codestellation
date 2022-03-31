const { expect } = require("chai")
const request = require("supertest")
const mongoose = require("mongoose")

const server = require("../../server/app")
const { errorUtil, descUtil } = require("../util")
const { userModel, userResponseModel, userFaultyModel1, userFaultyModel2, userFaultyModel3 } = require("../model")

const agent = request.agent(server)

function authTests() {

	before(function (done) {
		mongoose.model("User")
			.deleteMany({})
			.then(() => {
				done()
			})
	})

	it(descUtil("post", "api user", "signup user", "user sign up on proper parameters"), function (done) {
		let response
		agent.post("/api/user")
			.send(userModel)
			.then(function (res) {
				response = res
				expect(res.body).to.not.have.property("errorCode")
				expect(res.body).to.not.have.property("password")
				expect(res.body).to.have.property("userId")
				expect(res.body).to.have.property("createdAt")
				expect(res.body).to.have.property("updatedAt")
				expect(res.body).to.include(userResponseModel)

				done()
			})
			.catch(function (err) {
				debug(response.body)
				done(errorUtil(err))
			})
	})

	it(descUtil("post", "api user", "signup user", "signup fails on inadequate data"), function (done) {
		let response
		agent.post("/api/user")
			.send(userFaultyModel1)
			.then(function (res) {
				expect(res.body).to.have.property("errorCode", '400-USER-000')
				done()
			})
			.catch(function (err) {
				debug(response.body)
				done(errorUtil(err))
			})
	})

	it(descUtil("post", "api user", "signup user", "signup fails on inadequate data"), function (done) {
		let response
		agent.post("/api/user")
			.send(userFaultyModel2)
			.then(function (res) {
				response = res
				expect(res.body).to.have.property("errorCode", '400-USER-000')
				done()
			})
			.catch(function (err) {
				debug(response.body)
				done(errorUtil(err))
			})
	})

	it(descUtil("post", "api user", "signup user", "signup fails on inadequate data"), function (done) {
		let response
		agent.post("/api/user")
			.send(userFaultyModel3)
			.then(function (res) {
				response = res
				expect(res.body).to.have.property("errorCode", '400-USER-000')
				done()
			})
			.catch(function (err) {
				debug(response.body)
				done(errorUtil(err))
			})
	})

	it(descUtil("post", "api user", "signup user", "signup fails for duplicate user"), function (done) {
		let response
		agent.post("/api/user")
			.send(userModel)
			.then((res) => {
				response = res
				expect(res.body).to.not.have.property("userId")
				expect(res.body).to.have.property("errorCode", "400-USER-001")
				done()
			})
			.catch((err) => {
				debug(response.body)
				done(errorUtil(err))
			})
	})

	it(descUtil("post", "api user login", "login user", "users login fail for incorrect password"), function (done) {
		let response
		agent.post("/api/user/login")
			.send({
				phoneNumber: userModel.phoneNumber,
				password: "incorrectpassword",
			})
			.then((res) => {
				response = res
				expect(res.body).to.have.property("errorCode", "401-AUT-000")
				done()
			})
			.catch((err) => {
				debug(response.body)
				done(errorUtil(err))
			})
	})

	it(descUtil("post", "api user login", "login user", "users gets logged in"), function (done) {
		let response
		agent.post("/api/user/login")
			.send({
				phoneNumber: userModel.phoneNumber,
				password: userModel.password,
			})
			.then((res) => {
                response = res
                expect(res.body).to.not.have.property('errorCode')
				expect(res.body).to.have.property("userId")
				expect(res.body).to.include(userResponseModel)
				expect(res.body)
				done()
			})
			.catch((err) => {
				debug(response.body)
				done(errorUtil(err))
			})
	})

	it(descUtil("get", "api user", "get user", "get user success due to persistent session"), function (done) {
		let response
		agent.get("/api/user")
			.then((res) => {
				response = res
				expect(res.body).to.not.have.property("errorCode")
				expect(res.body).to.have.property("userId")
				done()
			})
			.catch((err) => {
				debug(response.body)
				done(errorUtil(err))
			})
    })
    
    it(descUtil("post", 'api user logout', 'logout user', 'logout user success'), function(done) {
        let response
        agent.post('/api/user/logout')
            .then(res => {
                response = res
                expect(res.status).to.equal(204)
                expect(res.body).to.not.have.property('userId')
                expect(res.body).to.not.have.property('errorCode')
                done()
            })
            .catch(err => {
                debug(response.body)
                done(errorUtil(err))
            })
    })

    it(descUtil("post", 'api user logout', 'logout user', 'logout user failure due to invalid session cookie'), function(done) {
        let response 
        agent.post('/api/user/logout')
            .then(res => {
                response = res
                expect(res.body).to.have.property('errorCode', '401-AUT-001')
                done()
            })
            .catch(err => {
                debug(response.body)
                done(errorUtil(err))
            })
    })
}

module.exports = authTests
