const router = require("express").Router();
const movieController = require("../controllers/movieController");
const tokenService = require("../services/tokenService");

// Add new movie
router.post("/", tokenService.verify, movieController.addMovie);

// Update movie
router.put("/:id", tokenService.verify, movieController.updateMovie);

// Delete movie
router.delete("/:id", tokenService.verify, movieController.deleteMovie);

// Get certain movie
router.get("/find/:id", tokenService.verify, movieController.getMovie);

// Get random movie
router.get("/random", tokenService.verify, movieController.getRandomMovie);

// Get all movies
router.get("/", tokenService.verify, movieController.getAllMovies);

module.exports = router;