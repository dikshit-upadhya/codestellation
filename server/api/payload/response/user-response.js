const toClientFormat = (obj) => ({
    userId: obj.user_id, 
    firstName: obj.first_name, 
    lastName: obj.last_name, 
    email: obj.email, 
    phoneNumber: obj.phone_number, 
    createdAt: obj.createdAt, 
    updatedAt: obj.updatedAt ,
    role: obj.role, 
    createdById: obj.created_by_id ,
    updatedById: obj.updated_by_id
})

module.exports = {toClientFormat}