const jwt = require("jsonwebtoken")
const form = require("../model_login/model_controler")

const authMiddleware = async function(req, res, next) {
    const token = req.headers["authorization"] ? req.headers["authorization"].replace("Bearer ", "") : null
    try {
        const userId = jwt.verify(token, process.env.SECRET_KEY)
        const user = await form.findOne({ _id: userId })
        if (!user) return res.status(404).json("the user asigned to this token can no longer be found. Please verify if the account still exist")
        req.user = user
        req.token = token
        next()
    } catch (err) {
        res.status(401).json("the user is not authorized. Please provide a valid token to proceed")
    }
}

module.exports = {
    authMiddleware,
}