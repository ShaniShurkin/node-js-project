const isAdmin = (req, res, next) => {
    if (req.body.role == "admin") {
         next();
    } else {
        res.status(403).json({ error: "Unauthorized user" });
    }
};
const isFundRaiser = (req, res, next) => {
    let roles = ["fundRaiser", "admin"]
    if (roles.includes(req.body.role)) {
        next();
    } else {
        res.status(403).json({ error: "Unauthorized user" });
    }
};

module.exports = { isAdmin, isFundRaiser };