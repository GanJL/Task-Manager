const JWT = require("jsonwebtoken")

// generates JWT token with encrypted id information 

const generateToken = (id) => {

    return JWT.sign({
        id
    }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = generateToken;