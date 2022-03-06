const router = require('express').Router();
const userController = require('../controller/users');
const verify = require('../controller/verifyToken');

// UPDATE
router.put("/:id", verify, userController.updateUser)

// DELETE
router.delete("/:id", verify, userController.deleteUser)

// GET
router.get("/find/:id", userController.getAUser)

// GET ALL
router.get("/", verify, userController.getAllUsers)

// GET USER STATS
router.get("/stats", verify, userController.getUserStats)

// Export as router
module.exports = router;