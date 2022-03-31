const giveError = (statusCode, message) => ({ statusCode, message })

module.exports = {
    giveError, 
    
    '500-GEN-000': giveError(500, `Something went wrong`),

    '500-GEN-001': giveError(500, `Something went wrong`), 

    '404-GEN-000': giveError(404, `The route you are looking for doesn't exist`)

}