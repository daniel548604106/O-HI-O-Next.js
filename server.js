const express = require("express");

const app = express();
const server = require("http").Server(app);

const dev = process.env.NODE_ENV !== "production";

// The custom server uses the following import to connect the server with the Next.js application:

const next = require("next");

const nextApp = next({ dev });

const handle = nextApp.getRequestHandler();
const connectDB = require("./utils/mongoDB");

const PORT = process.env.PORT || 3000;

// Because of our setting , the server and client will both run on port 3000
// The following dotenv config will have access to .env file , so make sure it's named as .env and not .env.local .etc
require("dotenv").config();

if (process.env.NODE_ENV === "production") {
  console.log = function () {};
}

connectDB()
  .then(() => {
    nextApp.prepare().then(() => {
      // routes
      app.use("/api/v1/oauth", require("./routes/oAuthRoute"));
      app.use("/api/v1/products", require("./routes/productRoute"));
      app.use("/api/v1/auth", require("./routes/authRoute"));
      app.use("/api/v1/users", require("./routes/userRoute"));
      app.use("/api/v1/banners", require("./routes/bannerRoute"));
      app.use("/api/v1/reviews", require("./routes/reviewRoute"));
      app.use("/api/v1/favorites", require("./routes/favoriteRoute"));
      app.use("/api/v1/shops", require("./routes/shopRoute"));
      app.use("/api/v1/my", require("./routes/myRoute"));
      app.use("/api/v1/chat", require("./routes/chatRoute"));
      app.use("/api/v1/orders", require("./routes/orderRoute"));
      app.all("*", (req, res) => handle(req, res));

      server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`express server running on ${PORT}`);
      });
    });
  })
  .catch((err) => {
    if (err) console.log(err);
  });
app.use(express.json({ limit: "50mb" })); // this is the body parser
app.use(express.urlencoded({ limit: "50mb", extended: true })); // changed
// Socket.io
