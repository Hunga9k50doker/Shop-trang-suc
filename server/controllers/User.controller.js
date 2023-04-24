import UserModel from "../models/User.model.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

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
      return res.status(404).json({ success: false, message: "Người dùng không tồn tại" });
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
      return res.json({ success: false, message: "Người dùng không tồn tại" });
    }
    const isMatch = await argon2.verify(user.password, password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Sai tên đăng nhập hoặc mật khẩu",
      });
    }

    const token = generateToken(user);

    return res.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error.message);
  }
};

//login verify user

export const verify = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await UserModel.findOne({ username });
    console.log(username, user, req.body);
    if (!user) {
      return res.status(204).json({ success: true, message: "Người dùng chưa được xác thực." });
    }
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error.message);
  }
};

//register function

export const register = async (req, res) => {
  const { username, password, repassword, name, telephone } = req.body;
  if (password !== repassword) {
    return res.status(200).json({ success: false, message: "Mật khẩu không khớp" });
  }
  try {
    const user = await UserModel.findOne({ username });
    if (user) {
      return res.status(200).json({ success: false, message: "Tên đăng nhập đã tồn tại" });
    }

    const encryptedPassword = await argon2.hash(password);

    const newUser = new UserModel({
      username,
      password: encryptedPassword,
      name,
      telephone,
    });

    await newUser.save();

    const token = generateToken(newUser);
    return res.json({ success: true, token });
  } catch (error) {
    return res.json({ success: false, message: error.message });
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
    let user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "Người dùng không tồn tại" });
    }
    user = await UserModel.findByIdAndDelete(id);
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//update user
export const updateUser = async (req, res) => {
  const { id } = req.params;
  if (req._id !== id && req.role !== "admin") {
    return res.json({ success: false, message: "Bạn chưa được xác thực" });
  }
  const { name, telephone, address } = req.body;
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return res.json({ success: false, message: "Người dùng không tồn tại" });
    }
    user.name = name;
    user.telephone = telephone;
    user.address = address;
    await user.save();
    const { username, password, ...rest } = user.toObject();
    return res.json({ success: true, data: rest });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
