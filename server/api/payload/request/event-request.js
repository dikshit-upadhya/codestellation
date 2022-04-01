const toServerFormat = (obj) => ({
    event_name: obj.eventName, 
    event_desc: obj.eventDesc, 
    prize_money: obj.prizeMoney, 
    registration_fees: obj.registrationFees, 
    rules: obj.rules, 
    venue: obj.venue, 
    phone_number: obj.phoneNumber, 
    email: obj.email, 
    club_id: obj.clubId
})

module.exports = {
    toServerFormat
}