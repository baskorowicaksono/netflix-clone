const express = require("express")
const User = require("../models/User")
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Registration
const register = async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });

    try{
        const user = await newUser.save();
        res.status(201).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
}

// Login
const login = async (req, res) => {
    try{
        const user = await User.findOne({
            email: req.body.email
        });
        !user && res.status(401).json("Wrong password or username!")        // No user found with that email

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password && res.status(401).json("Wrong password or username")    // Wrong password error

        const accessToken = jwt.sign({          // Create jwt access token
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.SECRET_KEY,
        {expiresIn: "10h"})

        const {password, ...info} = user._doc;
        res.status(200).json({...info, accessToken});
    } catch(err){
        res.status(500).json(err);
    }
}

module.exports = { register, login }