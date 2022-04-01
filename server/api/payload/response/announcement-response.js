const toClientFormat = (obj) => ({
    announcementId: obj.announcement_id, 
    announcementDate: obj.announcement_date, 
    announcementDesc: obj.announcement_desc,
    clubId: obj.club_id, 
    announcementType: obj.announcement_type,
    createdById: obj.created_by_id,
    updatedById: obj.updated_by_id,
}) 

module.exports = {
    toClientFormat
}