const errorDef = require('./error-resources');
const appModules = require('../app-modules');

class AppError extends Error {
    constructor(errorCode, moduleName, payload) {
        let mappedError = errorDef[moduleName][errorCode];
        if (!mappedError) {
            moduleName = appModules.GENERAL;
            errorCode = '500-GEN-001';
            mappedError = errorDef[moduleName][errorCode];
        }

        super(mappedError.message);

        this.moduleName = moduleName;
        this.errorCode = errorCode;
        this.statusCode = mappedError.statusCode;
        this.description = mappedError.message;
        this.payload = payload || null;
    }
}

module.exports = AppError;
//# sourceMappingURL=app-error.js.map