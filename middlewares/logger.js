module.exports = function (msg, funcToExecuteAfterLogging) {//closure - in order to enable parameters to middleware
    return function (req, res, next) {
        console.log(`${msg}: ${req.url}, time: ${new Date()} `);
        //funcToExecuteAfterLogging();
        if (next) next();
    }
}