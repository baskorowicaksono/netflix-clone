const express = require("express");
const User = require('../models/User');
const CryptoJS = require("crypto-js");


// Update
const updateUser = async (req, res) => {
    if(req.user.id === req.params.id || req.user.isAdmin){              // Checking if user is admin or user id is same in jwt token and request params
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(                   // Encrypt the new password if given a new password
                req.body.password,
                process.env.SECRET_KEY,
            ).toString();
        }

        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, 
            {new: true});

            res.status(200).json(updatedUser)
        } catch(err) {
            res.status(500).json(err);
        }
    } else{
        res.status(403).json("You can update only your account!");
    }
}

// Delete
const deleteUser = async (req, res) => {
    if(req.user.id === req.params.id || req.user.isAdmin){
        try{
            await User.findByIdAndDelete(req.params.id);

            res.status(200).json("User has been deleted")
        } catch(err) {
            res.status(500).json(err);
        }
    } else{
        res.status(403).json("You can delete only your account!");
    }
}

// Get
const getUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        
        const {password, ...info} = user._doc;
        res.status(200).json(info);
    } catch(err) {
        res.status(500).json(err);
    }
}

// Get All User
const getAllUser = async (req, res) => {
    const query = req.query.new;      // query to limit result only to 5 results
    if(req.user.id === req.params.id || req.user.isAdmin){
        try{
            const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find();       // limit user to 5 results and sort from latest

            res.status(200).json(users)
        } catch(err) {
            res.status(500).json(err);
        }
    } else{
        res.status(403).json("You are not allowed to see all users!");
    }
}

// Get User Stats
const getUserStats = async(req, res) => {               // Get total user being made per month
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);

    try{
        const data = await User.aggregate([
            {
                $project:{
                    month: {$month: "$createdAt"}
                }
            }, {
                $group: {
                    _id: "$month",
                    total: {$sum:1}
                }
            }
        ]);

        res.status(200).json(data);
    } catch(err) {
        res.status(500).json(err);
    }
}

module.exports = { updateUser, deleteUser, getUser, getAllUser, getUserStats }