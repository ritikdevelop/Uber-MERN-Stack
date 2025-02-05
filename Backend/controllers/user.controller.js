const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const blackListTokenModel = require("../models/blacklistToken.model");

module.exports.registerUser = async (req, res, next) => {
  // console.log("Request body:", req.body); // Log the request body
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("Validation errors:", errors.array()); // Log validation errors
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  if (!fullname || !fullname.firstName || !fullname.lastName) {
    return res
      .status(400)
      .json({ message: "Fullname is required with firstName and lastName" });
  }

  try {
    const isUserAlready = await userModel.findOne({ email });

    if (isUserAlready) {
      console.log("User already exists:", email); // Log existing user email
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
      firstName: fullname.firstName,
      lastName: fullname.lastName,
      email,
      password: hashedPassword,
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
  } catch (error) {
    console.error("Error during user registration:", error.message); // Log error message
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = user.generateAuthToken();

  res.cookie("token", token);

  res.status(200).json({ token, user });
};

module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  await blackListTokenModel.create({ token });

  res.status(200).json({ message: "Logged out" });
};
