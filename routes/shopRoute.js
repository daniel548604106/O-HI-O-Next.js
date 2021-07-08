const express = require("express");

const router = express.Router();
const {
  addNewShop,
  getHotShop,
  getProductsFromShop,
  getShopInfo,
  getAllShops,
} = require("../controllers/shopController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getAllShops).post(protect, addNewShop);
router.route("/popular").get(getHotShop);
router.route("/shop/:account/products").get(getProductsFromShop);
router.route("/shop/:account").get(getShopInfo);
module.exports = router;
