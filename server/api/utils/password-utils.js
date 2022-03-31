const bcrypt = require('bcryptjs')

const generateHash = (password) => {
    const hash = bcrypt.hashSync(password, 10)
    return hash
}

const comparePasswordToHash = (password, hash) => {
    const isMatch = bcrypt.compareSync(password, hash)
    return isMatch
}

module.exports = {
    generateHash, 
    comparePasswordToHash
}