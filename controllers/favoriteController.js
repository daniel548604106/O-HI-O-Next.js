const Favorite = require("../models/favoriteModel");

const addToFavorite = async (req, res) => {
  try {
    const { id, type } = req.body;
    console.log("id", id);
    const { _id } = req.user;
    let productId;
    let shopId;

    switch (type) {
      case "product":
        productId = id;
        break;
      case "shop":
        shopId = id;
        break;
      default: {
        console.log("hi");
      }
    }
    const favoriteList = await Favorite.findOne({ user: _id });
    if (!favoriteList) {
      const favorite = await Favorite.create({
        favoriteShops: shopId,
        favoriteProducts: productId,
        user: _id,
      });
      console.log(favorite);
      return res.status(200).json({
        favorite,
      });
    }

    switch (type) {
      case "product":
        if (favoriteList.favoriteProducts.indexOf(productId) === -1) {
          favoriteList.favoriteProducts.push(productId);
          favoriteList.save();
        } else {
          const index = favoriteList.favoriteProducts.indexOf(productId);
          favoriteList.favoriteProducts.splice(index, 1);
          favoriteList.save();
        }
        break;
      case "shop":
        if (favoriteList.favoriteShops.indexOf(shopId) === -1) {
          favoriteList.favoriteShops.push(shopId);
          favoriteList.save();
        } else {
          const index = favoriteList.favoriteShops.indexOf(shopId);
          favoriteList.favoriteShops.splice(index, 1);
          favoriteList.save();
        }

        break;
      default: {
        console.log("complete");
      }
    }
    res.status(200).json({
      favoriteList,
    });
  } catch (error) {
    console.log(error);
  }
};

const getFavList = async (req, res) => {
  try {
    console.log("get Products");
    const { _id } = req.user;
    const userFavList = await Favorite.findOne({ user: _id }).populate([
      "favoriteProducts",
      "favoriteShops",
    ]);
    console.log("user", userFavList);
    res.status(200).json({
      userFavList,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addToFavorite, getFavList };
