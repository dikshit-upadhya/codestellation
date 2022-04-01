const toServerFormat = (obj) => ({
    phone_number: obj.phoneNumber, 
    name: obj.name, 
    password: obj.password, 
    email: obj.email,
    astu_roll_number: obj.astuRollNumber,
    semester: obj.semester,
    branch: obj.branch,
})

module.exports = {toServerFormat}