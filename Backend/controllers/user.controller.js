const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

/**
//  * Register a new user
//  * @function
//  * @param {Object} req - The request object
//  * @param {Object} res - The response object
//  * @param {Function} next - The next middleware function
 */

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

//   console.log(req.body);

  const { FullName, email, password } = req.body;

  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstName: FullName.firstName,
    lastName: FullName.lastName,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({ token, user });
};


module.exports.loginUser = async (req, res, next) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }
  const isMatch = await user.comparePassword(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const token = user.generateAuthToken();

  res.status(200).json({ token, user });
};

module.exports.getUserProfile = async (req, res, next) => {
  
  res.status(200).json({ user });
};