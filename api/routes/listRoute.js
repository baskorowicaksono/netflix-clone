const router = require("express").Router();
const listController = require("../controllers/listController");
const tokenService = require("../services/tokenService");

// Add new list
router.post("/", tokenService.verify, listController.addList);

// Delete list
router.delete("/:id", tokenService.verify, listController.deleteList);

// Get Lists
router.get("/", listController.getLists);

module.exports = router;