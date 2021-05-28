import dbConnect from "../../../../../utils/mongoDB";
import Shop from "../../../../../models/shopModel";

export default async function (req, res) {
  await dbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const shops = await Shop.find().limit(5);

        res.json({
          shops,
        });
      } catch (error) {
        console.log(error);
      }
  }
}
