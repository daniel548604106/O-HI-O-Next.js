import dbConnect from "../../../../utils/mongoDB";
import Product from "../../../../models/productModel";

export default async function (req, res) {
  await dbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const products = await Product.aggregate([{ $sample: { size: 10 } }]);
        res.json({ products });
      } catch (error) {
        console.log("error", error);
      }
  }
}
