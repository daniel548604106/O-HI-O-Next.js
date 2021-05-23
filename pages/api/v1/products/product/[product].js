import dbConnect from "../../../../../utils/mongoDB";
import Product from "../../../../../models/productModel";
export default async function (req, res) {
  await dbConnect();
  const { method } = req;
  const { id } = req.params;
  switch (method) {
    case "GET":
      try {
        const product = await Product.findById(id)
          .populate("publishedBy")
          .populate("reviews");
        res.json({
          product,
        });
      } catch (error) {
        console.log(error);
      }
  }
}
