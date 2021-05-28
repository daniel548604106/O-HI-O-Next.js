import dbConnect from "../../../../../utils/mongoDB";
import Shop from "../../../../../models/shopModel";
export default async function (req, res) {
  await dbConnect();
  console.log("hihi", req.query);
  const { account } = req.query;
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const shop = await Shop.findOne({ account });
        console.log("backend", shop);
        res.json({ shop });
      } catch (error) {
        console.log(error);
      }
  }
}
