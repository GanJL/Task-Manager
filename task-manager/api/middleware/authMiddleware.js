const JWT = require("jsonwebtoken")
const User = require("../models/users")
const asyncHandler = require("express-async-handler");

// middleware to ensure route is authorised based on JWT retrieved from HTTP headers

const protect = asyncHandler(async (req, res, next) => {

  let token;

  if (

    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")

  ) {

    try {

      token = req.headers.authorization.split(" ")[1];

      const decoded = JWT.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();

    } catch (error) {

        return res.status(401).json({

            "errors": [
                {
                    "msg": "Token invalid",
                },
            ]
        })
    }

  }
  

  if (!token) {

    return res.status(401).json({
      
        "errors": [
            {
                "msg": "No token found",
            }
        ]
    })
  }

});

module.exports = { protect };