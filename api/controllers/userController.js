const asyncHandler = require('express-async-handler')

const User = require('../models/users');

const generateToken = require('../utils/generateToken');

const authUser = asyncHandler(async (req, res) => {

    const { email, password} = req.body;

    const user = await User.findOne({email});
    
    if (user && (await user.matchPassword(password))) {

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })

    } else {

        return res.status(400).json({

            "errors": [
                {
                    "msg": "Invalid email or password",
                }
            ]
        })
    }

})

const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password} = req.body;

    const userExists = await User.findOne({email});

    if (userExists) {

        return res.status(400).json({

            "errors": [
                {
                    "msg": "User already exist",
                }
            ]
        })

        
    }

    const user = await User.create({

        name,
        email,
        password,
    })

    if (user) {

        res.status(201).json({

            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })

        console.log("User account created successfully");

    } else {

        return res.status(400).json({
            
            "errors": [
                {
                    "msg": "User already exist",
                }
            ]
        })
    }

})

module.exports = { registerUser, authUser }