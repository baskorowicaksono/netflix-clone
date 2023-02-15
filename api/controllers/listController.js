const express = require("express");
const List = require('../models/List');

const addList = async (req, res) => {
    if(req.user.isAdmin){
        try{
            const newList = new List(req.body);
            await newList.save();

            res.status(201).json(newList);
        } catch(err){
            res.status(500).json(err);
        }
    } else{
        res.status(403).json("You are not authorized!");
    }
}

const deleteList = async (req, res) => {
    if(req.user.isAdmin){
        try{
            await List.findByIdAndDelete(req.params.id);

            res.status(200).json("The list has been deleted");
        } catch(err) {
            res.status(500).json(err);
        }
    } else{
        res.status(403).json("You are not authorized!");
    }
}

const getLists = async (req, res) => {
    const type = req.query.type;
    const genre = req.query.genre;

    let list = [];

    try {
        if(type){
            if(genre){
                list = await List.aggregate([
                    {
                        $sample: { size: 10 }
                    },
                    {
                        $match: { type: type, genre: genre }
                    }
                ])
            } else{
                list = await List.aggregate([
                    {
                        $sample: { size: 10 }
                    },
                    {
                        $match: { type: type }
                    }
                ])
            }
        } else{
            list = await List.aggregate([
                {$sample: 
                    { size: 10 }
                }
            ])
        }
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { addList, deleteList, getLists }