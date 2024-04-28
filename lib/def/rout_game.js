const express = require("express");
const router = express.Router();
const controller = require('./controller_game')

// router.get("/",controller.getGameId);
router.get("/",controller.getGameList);
router.get("/:id",controller.getGame_Id);
router.post("/",controller.insertGame);
router.put("/:id",controller.updateGame);
router.delete("/:id",controller.deleteGame);

module.exports = router;