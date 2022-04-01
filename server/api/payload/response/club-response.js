const toClientFormat = (obj) => ({
    clubId: obj.club_id, 
    clubName: obj.club_name, 
    clubFees: obj.club_fees, 
    clubDesc: obj.club_desc
})

module.exports = {toClientFormat, 
    toClientFormatArray: (clubs) => clubs.map(club => toClientFormat(club))
}