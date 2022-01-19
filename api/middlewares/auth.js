const auth = (req, res, next) => {
    if (req.session && req.session.user) {
        next()
    } else {
        return res.status(500).json({msg: "You are not logged !"})
    }
}

module.exports = auth