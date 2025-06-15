import jwt from "jsonwebtoken";
import { promisify } from "util";
import UserModel from "../models/Users.js";

const protectRoute = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authentication required" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = await promisify(jwt.verify)(token, process.env.SECRET_KEY);

    const user = await UserModel.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: "User no longer exists" });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Authentication error:", err.message);
    res.status(401).json({ message: "Unauthorized access" });
  }
};

export default protectRoute;
