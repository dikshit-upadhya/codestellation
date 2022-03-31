const AppError = require('../errors/app-error') 
const appModules = require('../app-modules')

const handleAsync = (actualReqHandler) => {
    return async (req, res, next) => {
        try {
            await actualReqHandler(req, res, next)
        } catch(err) {
            if (!(err instanceof AppError)) {
                err = new AppError('500-GEN-000', appModules.GENERAL, err)
            }
            next(err)
        }        
    }
}

module.exports = handleAsync;