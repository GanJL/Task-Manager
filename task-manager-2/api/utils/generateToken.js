const JWT = require("jsonwebtoken")

const generateToken = (id) => {

    return JWT.sign({
        id
    }, process.env.JWT_SECRET, {
        expiresIn: 30000
    })
};

module.exports = generateToken;