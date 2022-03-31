const AppError = require('../errors/app-error');
const appModules = require('../app-modules');

const sayHello = async data => {
    try {
        // throw new Error()
        return {
            yourText: data.yourText,
            textFromServer: 'Fuck you bitch!!!'
        };
    } catch (err) {
        if (!(err instanceof AppError)) {
            throw new AppError('500-USER-000', appModules.USER, err);
        }
        throw err;
    }
};

module.exports = {
    sayHello
};
//# sourceMappingURL=user-service.js.map