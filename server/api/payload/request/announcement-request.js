const toServerFormat = (obj) => ({
    announcement_desc: obj.announcementDesc,
    announcement_type: obj.announcementType,
    club_id: obj.clubId
})

module.exports = {
    toServerFormat
}