const toClientFormat = (obj) => ({
    eventId: obj.event_id, 
    eventName: obj.event_name, 
    eventDesc: obj.event_desc, 
    prizeMoney: obj.prize_money, 
    clubId: obj.club_id, 
    registrationFees: obj.registration_fees,
    rules: obj.rules, 
    venue: obj.venue, 
    phoneNumber: obj.phone_number, 
    email: obj.email,
    createdById: obj.createdById, 
    updatedById: obj.updatedById
})

module.exports = {
    toClientFormat
}