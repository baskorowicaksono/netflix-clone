const router = require('express').Router();
const movieController = require('../controllers/movies');
const verify = require('../controller/verifyToken');

// CREATE/ADD
router.post("/", verify, movieController.addMovie)

// UPDATE
router.put("/:id", verify, movieController.updateMovie)

// DELETE
router.delete("/:id", verify, movieController.deleteMovie)

// GET
router.get("/find/:id", verify, movieController.getAUser)

// GET RANDOM MOVIE
router.get("/random", verify, movieController.getRandomMovie)

// GET ALL MOVIES
router.get("/", verify, movieController.getAllMovies)

// Export as router
module.exports = router;