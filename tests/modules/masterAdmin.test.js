const {expect} = require('chai')
const request = require('supertest')

const {descUtil, errorUtil} = require('../util')
const server = require('../../server/app')
const {masterAdminModel, masterAdminFaultyModel} = require('../model')

const agent = request.agent(server)

function masterAdminTests() {


    it(descUtil('post', 'api admin master', 'create master admin', 'create master admin failure due to incorrect admin secret'), function(done) {
        let response 
        agent.post('/api/admin/master')
            .send(masterAdminFaultyModel)
            .then(res => {
                response = res
                expect(res.body).to.not.have.property('userId')
                expect(res.body).to.have.property('errorCode', '403-ADM-000')
                done()
            })
            .catch(err => {
                debug(response.body)
                done(errorUtil(err))
            })
    })

    it(descUtil('post', 'api admin master', 'create master admin', 'create master admin success'), function(done) {
        let response 
        agent.post('/api/admin/master')
            .send(masterAdminModel)
            .then(res => {
                response = res
                expect(res.body).to.not.have.property('errorCode')
                expect(res.body).to.have.property('userId')
                done()
            })
            .catch(err => {
                debug(response.body)
                done(errorUtil(err))
            })
    })

    it(descUtil('get', 'api user', 'get master admin', 'get master admin failure'), function(done) {
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

    it(descUtil('post', 'api user login', 'login master admin', 'login master admin success'), function(done) {
        let response 
        agent.post('/api/user/login')
            .send({
                phoneNumber: masterAdminModel.phoneNumber, 
                password: masterAdminModel.password
            })
            .then(res => {
                response = res
                expect(res.body).to.not.have.property('errorCode')
                expect(res.body).to.have.property('userId')
                expect(res.body).to.have.property('role', 'MASTERADMIN')
                done()
            })
            .catch(err => {
                debug(response.body)
                done(errorUtil(err))
            })
    })

    it(descUtil('get', 'api user', 'get master admin', 'get master admin success'), function(done) {
        let response 
        agent.get('/api/user')
            .then(res => {
                response = res
                expect(res.body).to.not.have.property('errorCode')
                expect(res.body).to.have.property('userId')
                expect(res.body).to.have.property('role', 'MASTERADMIN')
                done()
            })
            .catch(err => {
                debug(response.body)
                done(errorUtil(err))
            })
    })

    // it(descUtil('post', 'api admin', 'create admin', 'create admin success by master admin'), function(done) {
    //     let response 
    //     agent.post('/api/admin')
    //         .send(adminModel)
    //         .then(res => {
    //             response = res
    //             expect(res.body).to.not.have.property('errorCode')
    //             expect(res.body).to.have.property('userId')
    //             done()
    //         })
    //         .catch(err => {
    //             debug(response.body)
    //             done(errorUtil(err))
    //         })
    // })

    it(descUtil('post', 'api user logout', 'logout master admin', 'logout master admin success due to prevailant session'), function(done) {
        let response 
        agent.post('/api/user/logout')
            .then(res => {
                response = res
                expect(res.body).to.not.have.property('errorCode')
                expect(res.status).to.equal(204)
                done()
            })
            .catch(err => {
                debug(response.body)
                done(errorUtil(err))
            })
    })

}

module.exports = masterAdminTests