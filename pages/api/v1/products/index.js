import dbConnect from "../../../../utils/mongoDB";

import Product from "../../../../models/productModel";

export default async function (req, res) {
  await dbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const products = await Product.find();
        res.status(200).json({
          products,
        });
      } catch (error) {
        console.log(error);
      }
  }
}
