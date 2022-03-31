const router = require('express').Router();

const { router: userRoutes } = require('./userRoutes');

router.use('', userRoutes);

module.exports = { router };
//# sourceMappingURL=index.js.map