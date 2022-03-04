const CryptoJS = require("crypto-js");
const User = require('../models/User');

module.exports.updateUser = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if(req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
            res.status(200).json(updatedUser);
        }catch (err){
            res.status(500).json(err);
        }
    
    } else {
        res.status(403).json({message: "You can only update on your own account!"});
    }
}

module.exports.deleteUser = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try{
            const deletedUser = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted");
        }catch (err){
            res.status(500).json(err);
        }
    
    } else {
        res.status(403).json({message: "You can only delete your own account!"});
    }
}

module.exports.getAUser = async (req, res) => {
    try{
        const foundUser = await User.findById(req.params.id);
        const {password, ...info} = foundUser._doc;
        res.status(200).json(info);
    }catch (err){
        res.status(500).json(err);
    }
}

module.exports.getAllUsers = async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try{
            const users = query ? await User.find().sort({_id: -1}).limit(10) : await User.find();
            res.status(200).json(users);
        }catch (err){
            res.status(500).json(err);
        }
    
    } else {
        res.status(403).json({message: "You are not authorized to see all users!"});
    }
}

module.exports.getUserStats = async (req, res) => {
    // const today = new Date();
    // const lastYear = today.setFullYear(today.setFullYear() - 1);
    // const monthArray = [
    //     "January",
    //     "February",
    //     "March",
    //     "April",
    //     "May",
    //     "June",
    //     "July",
    //     "August",
    //     "September",
    //     "October",
    //     "November",
    //     "December"
    // ];

    try{
        const data = await User.aggregate([
            {
                $project: {
                    month: {
                        $month: "$createdAt"
                    }
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: 1} 
                }
            }
        ]);
        res.status(200).json(data)
    } catch(err) {
        res.status(500).json(err);
    }
}