const AppError = require('../errors/app-error')

const unknownRoutesHandler = (req, res, next) => {
    next(new AppError('404-GEN-000', 'GENERAL'))
}

module.exports = unknownRoutesHandler