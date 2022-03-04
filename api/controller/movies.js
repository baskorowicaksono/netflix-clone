const Movie = require('../models/Movie');

module.exports.addMovie = async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);
        try{
            const addedMovie = await newMovie.save();
            res.status(201).json(addedMovie);
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({message: "You are not authorized!"});
    }
}

module.exports.updateMovie = async (req, res) => {
    if (req.user.isAdmin) {
        try{
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
            res.status(200).json(updatedMovie);
        }catch (err){
            res.status(500).json(err);
        }
    
    } else {
        res.status(403).json({message: "You are not authorized!"});
    }
}

module.exports.deleteMovie = async (req, res) => {
    if (req.user.isAdmin) {
        try{
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("Movie has been deleted");
        }catch (err){
            res.status(500).json(err);
        }
    
    } else {
        res.status(403).json({message: "You are not authorized!"});
    }
}

module.exports.getAMovie = async (req, res) => {
    if(req.user.isAdmin) {
        try{
            const foundMovie = await Movie.findById(req.params.id);
            res.status(200).json(foundMovie);
        } catch (err){
            res.status(500).json(err);
        }
    } else{
        res.status(403).json({message: "You are not authorized!"});
    }

}

module.exports.getRandomMovie = async (req, res) => {
    const type = req.query.type;
    let movie;
    if (req.user.isAdmin) {
        try{
            if(type === "series") {
                movie = await Movie.aggregate([
                    {
                        $match: {
                            isSeries: true
                        }
                    },
                    {
                        $sample: {
                            size: 1
                        }
                    }
                ])
            } else {
                movie = await Movie.aggregate([
                    {
                        $match: {
                            isSeries: false
                        }
                    },
                    {
                        $sample: {
                            size: 1
                        }
                    }
                ])
            }
            res.status(200).json(movie);
        }catch (err){
            res.status(500).json(err);
        }
    
    } else {
        res.status(403).json({message: "You are not authorized!"});
    }
}

module.exports.getAllMovies = async (req, res) => {
    if(req.user.isAdmin){
        try{
            const movies = await Movie.find();
            res.status(200).json(movies.reverse());
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({message: "You are not authorized!"});
    }
}