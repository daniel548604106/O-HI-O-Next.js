import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    account: {
      type: String,
    },
    name: {
      type: String,
    },
    password: {
      type: String,
    },
    biography: {
      type: String,
      default: "",
    },
    birthday: {
      type: String,
    },
    picture: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    website: {
      type: String,
      default: "",
    },
    facebook: {
      id: String,
      token: String,
      email: String,
      name: String,
      picture: String,
    },
    google: {
      id: String,
      token: String,
      email: String,
      name: String,
      picture: String,
    },
    line: {
      id: String,
      token: String,
      email: String,
      name: String,
      picture: String,
    },
    roles: {
      type: [
        {
          type: String,
          enum: ["user", "seller", "admin"],
        },
      ],
      default: ["user"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    id: false,
  }
);

mongoose.models = {};

userSchema.methods.matchPassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};
userSchema.pre("save", async function (next) {
  // 如果今天使用者更改其他個人資訊但沒有做密碼更改，就直接 save
  // User.create 就是 .save
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// virtual populate

const User = mongoose.model("User", userSchema);

module.exports = User;
