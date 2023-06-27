const FundRaiserService = require("../services/fundRaiserService");

const isAdmin = async(req, res, next) => {
    let userId = req.params['userId'];
    let fundRaiser = await FundRaiserService.getFundRaiserById(userId)
    fundRaiser = fundRaiser[0]
    if (fundRaiser.role == "admin") {
         next();
    } else {
        res.status(403).json({ error: "Unauthorized admin" });
    }
};

module.exports = { isAdmin };