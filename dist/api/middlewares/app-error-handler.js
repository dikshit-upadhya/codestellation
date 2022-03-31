function appErrorHandler(err, req, res, next) {
    res.status(err.statusCode).send(err);
}

module.exports = appErrorHandler;
//# sourceMappingURL=app-error-handler.js.map