const router = require('express').Router();
const authController = require('../controllers/auth');

// Register
router.post("/register", authController.registration)

// Login
router.post("/login", authController.login)

// Export as router
module.exports = router