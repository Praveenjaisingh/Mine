const express = require("express");
const router = express.Router();

const birthdayController = require("../Controllers/birthdayController");

router.get("/init", birthdayController.getInitData);
router.post("/unlock", birthdayController.unlockSurprise);
router.get("/letters", birthdayController.getLetters);
router.get("/memories", birthdayController.getMemories);

module.exports = router;