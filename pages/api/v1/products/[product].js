import dbConnect from "../../../../utils/mongoDB";
import Product from "../../../../models/productModel";

export default async function (req, res) {
  await dbConnect();
  const { method, query } = req;

  switch (method) {
    case "GET":
      switch (query.product) {
        case "recommendation":
          try {
            const products = await Product.aggregate([
              { $sample: { size: 10 } },
            ]);
            res.json({ products });
          } catch (error) {
            console.log("error", error);
          }
        case "discount":
          try {
            const products = await Product.find({
              discountPrice: { $ne: null },
            });

            res.json({ products });
          } catch (error) {
            console.log("error", error);
          }
      }
  }
}
