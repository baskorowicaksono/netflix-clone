const router = require("express").Router();
const authController = require('../controllers/authController')

// Registration
router.post("/register", authController.register )

// Login
router.post("/login", authController.login)

module.exports = router;