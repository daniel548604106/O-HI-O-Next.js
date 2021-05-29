import dbConnect from "../../../../utils/mongoDB";
import Favorite from "../../../../models/favoriteModel";
import withProtect from "../../../../middleware/withProtect";
import Product from "../../../../models/productModel";
import Shop from "../../../../models/shopModel";
const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        console.log("here", req.user);
        const { _id } = req.user;
        const userFavList = await Favorite.findOne({ user: _id })
          .populate({
            path: "favoriteProducts",
            model: Product,
          })
          .populate({ path: "favoriteShops", model: Shop });

        // console.log('user',userFavList)
        res.json({
          userFavList,
        });
      } catch (error) {
        res.status(500).json({
          error,
        });
        console.log(error);
      }
  }
};

export default withProtect(handler);
