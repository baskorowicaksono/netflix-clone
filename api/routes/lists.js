const router = require('express').Router();
const listController = require('../controller/lists');
const verify = require('../controller/verifyToken');

// CREATE/ADD
router.post("/", verify, listController.addList)

// UPDATE
router.put("/:id", verify, listController.updateList)

// DELETE
router.delete("/:id", verify, listController.deleteList)

// GET ALL LISTS
router.get("/", verify, listController.getAllLists)

// Export as router
module.exports = router;