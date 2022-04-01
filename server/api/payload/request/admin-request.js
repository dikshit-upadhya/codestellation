const toServerFormat = (adminObj) => ({
    phone_number: adminObj.phoneNumber, 
    name: adminObj.name, 
    password: adminObj.password, 
    email: adminObj.email,
    astu_roll_number: adminObj.astuRollNumber,
    semester: adminObj.semester,
    branch: adminObj.branch,
    admin_secret: adminObj.adminSecret
})

module.exports = {toServerFormat}