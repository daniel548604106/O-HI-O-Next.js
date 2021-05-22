import dbConnect from "../../../../utils/mongoDB";
import Banner from "../../../../models/bannerModel";
export default async function (req, res) {
  await dbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const banners = await Banner.find();
        res.json({
          banners,
        });
      } catch (error) {
        res.status(500).json({
          success: "false",
          error,
        });
        console.log(error);
      }
  }
}
