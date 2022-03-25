import UserModel from "../models/User.model.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const generateToken = (user) => {
  const token = jwt.sign(
    {
      _id: user._id,
      role: user.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "365d",
    }
  );
  return token;
};

//get user info when user logged in

export const getUser = async (req, res) => {
  const { _id } = req;
  try {
    const user = await UserModel.findById(_id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const { password, ...rest } = user.toObject();

    return res.status(200).json({ success: true, data: rest });
  } catch (error) {
    console.log(error.message);
  }
};

//login function

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const isMatch = await argon2.verify(user.password, password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Password is incorrect" });
    }

    const token = generateToken(user);

    return res.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error.message);
  }
};

//register function

export const register = async (req, res) => {
  const { username, password, repassword } = req.body;
  if (password !== repassword) {
    return res
      .status(400)
      .json({ success: false, message: "Password not match" });
  }
  try {
    const user = await UserModel.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    }

    const encryptedPassword = await argon2.hash(password);

    const newUser = new UserModel({
      username,
      password: encryptedPassword,
    });

    await newUser.save();

    const token = generateToken(newUser);
    return res.json({ success: true, token });
  } catch (error) {
    console.log(error.message);
  }
};

//get all users

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({}, { password: 0, username: 0 });
    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//delete user with id
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    await user.remove();
    return res.status(200).json({ success: true, message: "User deleted" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//update user
export const updateUser = async (req, res) => {
  const { id } = req.params;
  if (req._id !== id && req.role !== "admin") {
    return res
      .status(401)
      .json({ success: false, message: "You are not authorized" });
  }
  const { name, telephone, address } = req.body;
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    user.name = name;
    user.telephone = telephone;
    user.address = address;
    await user.save();
    const { username, password, ...rest } = user.toObject();
    return res.status(200).json({ success: true, data: rest });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
