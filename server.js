const express = require("express");

const app = express();
const server = require("http").Server(app);

const dev = process.env.NODE_ENV !== "production";

// The custom server uses the following import to connect the server with the Next.js application:

const next = require("next");

const nextApp = next({ dev });

const handle = nextApp.getRequestHandler();
const dbConnect = require("./utils/mongoDB");

const PORT = process.env.PORT || 3000;

// Because of our setting , the server and client will both run on port 3000
// The following dotenv config will have access to .env file , so make sure it's named as .env and not .env.local .etc
require("dotenv").config();

if (process.env.NODE_ENV === "production") {
  console.log = function () {};
}

dbConnect()
  .then(() => {
    nextApp.prepare().then(() => {
      // routes
      app.use("/v1/oauth", oAuthRoute);
      app.use("/v1/products", productRoute);
      app.use("/v1/auth", authRoute);
      app.use("/v1/users", userRoute);
      app.use("/v1/banners", bannerRoute);
      app.use("/v1/reviews", reviewRoute);
      app.use("/v1/favorite", favoriteRoute);
      app.use("/v1/shops", shopRoute);
      app.use("/v1/my", myRoute);
      app.use("/v1/chat", chatRoute);
      app.use("/v1/orders", orderRoute);
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
