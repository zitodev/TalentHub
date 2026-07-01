const User = require("../models/User");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({
    ...req.body,
    password: hashedPassword,
  });

  res.status(201).json({
    message: "User created",
    user,
  });
};

exports.login = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user)
    return res.status(401).json({
      message: "Invalid login",
    });

  const match = await bcrypt.compare(req.body.password, user.password);

  if (!match)
    return res.status(401).json({
      message: "Wrong password",
    });

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },

    process.env.JWT_SECRET,
  );

  res.cookie("token", token, {
    httpOnly: true,

    secure: false,

    sameSite: "lax",

    maxAge: 24 * 60 * 60 * 1000,
  });

  res.json({
    message: "Login successful",
    user: {
      id: user._id,
      role: user.role,
    },
  });
};

exports.checkAuth = (req, res) => {
  res.json({
    loggedIn: true,

    user: req.userInfo,
  });
};

exports.logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false, // set to true in production
    sameSite: "lax",
  });

  res.status(200).json({ message: "Logged out successfully" });
};
