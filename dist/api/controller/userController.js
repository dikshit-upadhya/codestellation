const { sayHello } = require('../services/user-service');
const { fromObject } = require('../payload/response/user-response');
const { toModel } = require('../payload/request/user-request');

module.exports = {
    hello: async (req, res) => {
        const data = toModel(req.body);
        const response = await sayHello(data);
        res.status(200).send(fromObject(response));
    },
    getUser: async (req, res) => {}
};
//# sourceMappingURL=userController.js.map