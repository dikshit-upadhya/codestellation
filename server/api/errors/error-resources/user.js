const {giveError} = require('./general')

module.exports = {
	"400-USER-000": giveError(400, `Request have inadequate or invalid parameters`),

	"500-USER-000": giveError(500, `Something went iwrong in the validation of the user request`),

	"404-USER-000": giveError(404, `No user with the provided userId present in the database`),

	"500-USER-001": giveError(500, `Something went wrong in the get user by userId`),

	"404-USER-001": giveError(404, `No user with the provided email found`),

	"500-USER-002": giveError(500, `Something went wrong in the get user by email`),

	"400-USER-001": giveError(400, `User with the provided details already exists`),

	"500-USER-003": giveError(500, `Something went wrong in signup of user`),

	"404-AUT-000": giveError(400, `No user found for the provided phoneNumber`),

	"401-AUT-000": giveError(401, `PhoneNumber or Password incorrect`),

	"500-AUT-000": giveError(500, `Something  went wrong in the user authentication`),

	"404-USER-001": giveError(404, `No user found with the provided credentials`),

    "401-AUT-001": giveError(401, `User is not logged in. Please login to continue`), 
    
    '500-AUT-001': giveError(500, `Something went wrong in user authorization`), 

    '403-AUT-000': giveError(403, `You don't have permissions to access this feature`), 

    '500-AUT-002': giveError(500, `Something went wrong in the user authorization`), 
}
