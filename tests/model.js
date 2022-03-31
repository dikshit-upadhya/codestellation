const config = require('config')

module.exports = {
	userModel: {
		firstName: "Lorem",
		lastName: "Ipsum",
		email: "loremipsum@gmail.com",
		phoneNumber: "1234567890",
		password: "hilorem",
	},
	userResponseModel: {
		firstName: "Lorem",
		lastName: "Ipsum",
		email: "loremipsum@gmail.com",
		phoneNumber: "1234567890",
	},
	userFaultyModel1: {
        firstName: "Lorem",
		lastName: "Ipsum",
		email: "loremipsum@gmail.com",
        phoneNumber: "1234567890",
        // password: 'hilorem'
    },
	userFaultyModel2: {
        firstName: "Lorem",
		lastName: "Ipsum",
		email: "loremipsum@gmail.com",
        // phoneNumber: "1234567890",
        password: 'hilorem'
    },
	userFaultyModel3: {
        // firstName: "Lorem",
		lastName: "Ipsum",
		email: "loremipsum@gmail.com",
        phoneNumber: "1234567890",
        password: 'hilorem'
    },


    // master admin
    masterAdminModel: {
        firstName: 'LoremMaster',
        lastName: 'IpsumMaster', 
        phoneNumber: '0987654321', 
        password: 'himaster', 
        adminSecret: config.get('adminsecret'),
        email: 'masterlorem@gmail.com'
    }, 

    masterAdminFaultyModel: {
        firstName: 'LoremMaster',
        lastName: 'IpsumMaster', 
        phoneNumber: '0987654321', 
        password: 'himaster', 
        adminSecret: 'incorrectsecret',
        email: 'masterlorem@gmail.com'
    }, 


    // admin 
    adminModel: {
        firstName: 'LoremAdmin', 
        lastName: 'IpsumAdmin', 
        phoneNumber: '1029384756', 
        password: 'hiadmin', 
        email: 'adminlorem@gmail.com'
    }, 
    adminFaultyModel: {
        // firstName: 'LoremAdmin', 
        lastName: 'IpsumAdmin', 
        // phoneNumber: '1029384756', 
        password: 'hiadmin', 
        email: 'adminlorem@gmail.com'
    }, 
}
