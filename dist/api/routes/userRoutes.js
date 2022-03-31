const router = require('express').Router();
const handleAsync = require('../middlewares/async-error-handler');
const userController = require('../controller/userController');

router.post('/hello', handleAsync(userController.hello));
router.get('/getUser', handleAsync(userController.getUser));

module.exports = { router };
//# sourceMappingURL=userRoutes.js.map