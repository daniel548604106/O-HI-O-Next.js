import dbConnect from "../../../../../utils/mongoDB";
import Product from "../../../../../models/productModel";
import Shop from "../../../../../models/shopModel";
import Review from "../../../../../models/reviewModel";
export default async function (req, res) {
  await dbConnect();
  const { method } = req;
  console.log("params", req.query);
  const id = req.query.product;
  switch (method) {
    case "GET":
      try {
        const product = await Product.findById(id)
          .populate({ path: "publishedBy", model: Shop })
          .populate({ path: "reviews", model: Review });

        console.log(product);
        res.json({
          product,
        });
      } catch (error) {
        console.log(error);
      }
  }
}
