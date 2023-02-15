const router = require("express").Router();
const userController = require('../controllers/userController')
const tokenService = require("../services/tokenService");

// Update user info
router.put("/:id", tokenService.verify, userController.updateUser);

// Delete user
router.delete("/:id", tokenService.verify, userController.deleteUser);

// Get user
router.get("/find/:id", userController.getUser);

// Get all user
router.get("/", tokenService.verify, userController.getAllUser);

// Get User stats
router.get("/stats", userController.getUserStats)

module.exports = router;