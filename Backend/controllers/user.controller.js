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

  const hashPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstName: FullName.firstName,
    lastName: FullName.lastName,
    email,
    password: hashPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({ user, token });
};
