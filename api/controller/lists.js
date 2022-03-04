const List = require('../models/List');

module.exports.addList = async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body);
        try{
            const addedList = await newList.save();
            res.status(201).json(addedList);
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({message: "You are not authorized!"});
    }
}

module.exports.updateList = async (req, res) => {
    if (req.user.isAdmin) {
        try{
            const updatedList = await List.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
            res.status(200).json(updatedList);
        }catch (err){
            res.status(500).json(err);
        }
    
    } else {
        res.status(403).json({message: "You are not authorized!"});
    }
}

module.exports.deleteList = async (req, res) => {
    if (req.user.isAdmin) {
        try{
            await List.findByIdAndDelete(req.params.id);
            res.status(200).json("List has been deleted");
        }catch (err){
            res.status(500).json(err);
        }
    
    } else {
        res.status(403).json({message: "You are not authorized!"});
    }
}

module.exports.getAllLists = async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
    try{
        if(typeQuery) {
            if(genreQuery) {
                list = await List.aggregate([
                    {
                        $sample: {
                            size: 10
                        }
                    },
                    {
                        $match: {
                            type: typeQuery,
                            genre: genreQuery
                        }
                    }
                ])
            } else {
                list = await List.aggregate([
                    {
                        $sample: {
                            size: 10
                        }
                    },
                    {
                        $match: {
                            type: typeQuery
                        }
                    }
                ])
            }
        }
        else {
            list = await List.aggregate([
                {$sample: {
                    size: 10
                }}
            ])
        }
        res.status(200).json(list);
    } catch(err) {
        res.status(500).json(err);
    }
}