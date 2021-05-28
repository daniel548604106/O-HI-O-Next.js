import dbConnect from "../../../../../utils/mongoDB";
import Product from "../../../../../models/productModel";

export default async function (req, res) {
  await dbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const products = await Product.find().limit(20).sort({ createdAt: -1 });
        res.json({
          products,
        });
      } catch (error) {
        console.log(error);
      }
  }
}
