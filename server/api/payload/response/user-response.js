const toClientFormat = (obj) => ({
    userId: obj.user_id, 
    name: obj.name, 
    email: obj.email, 
    phoneNumber: obj.phone_number, 
    createdAt: obj.createdAt, 
    updatedAt: obj.updatedAt ,
    role: obj.role, 
    astuRollNumber: obj.astu_roll_number,
    semester: obj.semester,
    branch: obj.branch,
    createdById: obj.created_by_id ,
    updatedById: obj.updated_by_id
})

module.exports = {toClientFormat}