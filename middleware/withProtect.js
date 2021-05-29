import User from "../models/userModel";
import jwt from "jsonwebtoken";
import jwtDecode from "jwt-decode";
const withProtect = (handler) => {
  return async (req, res) => {
    // Get token and check if it exists
    try {
      let token;
      if (req.cookies && req.cookies.token) {
        token = req.cookies.token;
        console.log("token", token);
        //JWT will return jwt malformed If Token is null/Invalid-Signature that is being passed to jwt.verifty function
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded", decoded);
        // find that user
        const currentUser = await User.findById(decoded.id);
        console.log("user", currentUser);
        if (!currentUser) {
          return res.status(401).json({
            success: false,
            message: "The user belonging to this token no longer exist",
          });
        }

        req.user = currentUser;
        return handler(req, res);
      }
    } catch (error) {
      res.status(401).json({
        success: false,
        message: "Please log in to get access",
      });
    }
  };
};

export default withProtect;
