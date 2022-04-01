const {validateClub, createClub:create, getAllClubs: getAll, getClubById, joinClubForUser} = require('../services/club-service')
const {toServerFormat, } = require('../payload/request/club-request')
const {toClientFormat, toClientFormatArray} = require('../payload/response/club-response')

module.exports = {
    createClub: async (req, res) => {
        let validatedObj = await validateClub(req.body)
        let clubData = toServerFormat(validatedObj)
        let newClub = await create(clubData, req.user.user_id)
        res.status(201).send(toClientFormat(newClub))
    }, 

    getAllClubs: async (req, res) =>  {
        let clubs = await getAll()
        res.status(200).send(toClientFormatArray(clubs))
    }, 

    getClubByClubId: async (req, res) => {
        let club_id = req.params.clubId
        let club = await getClubById(club_id)
        res.status(200).send(toClientFormat(club))
    }, 

    joinClub: async (req, res) => {
        let user_id = req.user.user_id
        await joinClubForUser(req.params.clubId, user_id)
        res.status(200).send()
    }
}