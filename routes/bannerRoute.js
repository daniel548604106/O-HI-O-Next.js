const express = require("express");
const Banner = require("../models/bannerModel");
const { getBanners } = require("../controllers/bannerController");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("hihi");
    const banners = await Banner.find();
    res.status(200).json({
      banners,
    });

    console.log("success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
