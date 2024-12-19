const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

router.post(
  "/register",
  [
    body("firstName")
      .notEmpty()
      .withMessage("First name is required")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("email")
      .isEmail()
      .withMessage("Invalid email")
      .isLength({ min: 5 })
      .withMessage("Email must be at least 5 characters long"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res) => {
    console.log("Request body:", req.body); // Log the request body

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Validation errors:", errors.array()); // Log validation errors
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { firstName, lastName, email, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        console.log("User already exists:", email); // Log existing user email
        return res.status(400).json({ message: "User already exists." });
      }

      // Hash the password
      const hashedPassword = await User.hashPassword(password);

      // Create new user
      const newUser = new User({
        FullName: { firstName, lastName },
        email,
        password: hashedPassword,
      });

      // Save user to database
      await newUser.save();

      // Generate auth token
      const token = newUser.generateAuthToken();

      res.status(201).json({ token });
    } catch (error) {
      console.error("Error during user registration:", error.message); // Log error message
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password length should be more than 6 characters"),
  ],
  userController.loginUser
);

router.get("/profile", authMiddleware.authUser, userController.getUserProfile);

router.get("/logout", authMiddleware.authUser, userController.logoutUser);

module.exports = router;
