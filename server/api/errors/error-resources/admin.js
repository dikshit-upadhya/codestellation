const {giveError} = require('./general')

module.exports = {
    '400-VAD-000': giveError(400, `Inadequate or invalid parameters`),  

    '500-VAD-000': giveError(500, `Something went wrong in validation of admin`), 

    '400-CUS-000': giveError(400, `User already exists`), 

    '500-CUS-000': giveError(500, `Something went wrong in the user creation`), 

    '403-ADM-000': giveError(403, `The credentials provided are incorrect`), 

    '500-ADM-000': giveError(500, `Something went wrong in the creation of admin`)
}