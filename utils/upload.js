const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGE_KIT_URL_ENDPOINT,
});

const uploadUserAvatar = async (req, res, next) => {
  try {
    if (!req.body.avatar) return next();
    const uploaded = await imagekit.upload({
      file: req.body.avatar, // required
      fileName: `user-${req.params._id}-${Date.now()}`, // required
      folder: `/images/users/`,
    });
    req.body.avatar = uploaded.url;
    console.log("name", uploaded.name, "filedId", uploaded.fileId);
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { uploadUserAvatar };
