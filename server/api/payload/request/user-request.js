const toServerFormat = (obj) => ({
    first_name: obj.firstName, 
    last_name: obj.lastName,
    email: obj.email, 
    phone_number: obj.phoneNumber, 
    password: obj.password,  
})

module.exports = {toServerFormat}