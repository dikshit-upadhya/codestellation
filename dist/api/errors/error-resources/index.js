const appModules = require('../../app-modules');
const general = require('./general');
const user = require('./user');

module.exports = {
    [appModules.GENERAL]: general,
    [appModules.USER]: user
};
//# sourceMappingURL=index.js.map