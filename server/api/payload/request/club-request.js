const toServerFormat = (clubObj) => ({
    club_name: clubObj.clubName, 
    club_desc: clubObj.clubDesc, 
    club_fees: clubObj.clubFees
})

module.exports = {toServerFormat,
    toServerFormatArray: (clubs) => clubs.map(club => toServerFormat(club))
}