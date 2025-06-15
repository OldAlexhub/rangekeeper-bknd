import UserModel from "../models/Users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const Signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      fullRange,
      modelYear,
    } = req.body;

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: `User already exists!` });
    }

    if (password != confirmPassword) {
      return res.status(400).json({ message: `Passwords don't match!` });
    }

    if (!fullRange) {
      return res
        .status(400)
        .json({ message: `Vehcile Manufactory Range is Required` });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      fullRange,
      modelYear,
    });

    await newUser.save();
    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: "Server Error!" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: `User is undefined` });
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return res.status(400).json({ message: `Invalid Credentials` });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    const name = `${user.firstName} ${user.lastName}`;
    const userId = user._id;
    const range = user.fullRange;

    res
      .status(200)
      .json({ message: "Login successful", token, name, userId, range });
  } catch (error) {
    res.status(500).json({ message: `Server Error` });
  }
};
