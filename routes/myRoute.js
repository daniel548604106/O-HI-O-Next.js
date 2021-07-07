const express = require("express");

const router = express.Router();
const { patchMyData, patchMyPhoto } = require("../controllers/myController");
const { protect } = require("../middleware/authMiddleware");
const { uploadUserAvatar } = require("../utils/upload");

router.route("/").patch(protect, patchMyData);
router.route("/photo").patch(protect, uploadUserAvatar, patchMyPhoto);

module.exports = router;
