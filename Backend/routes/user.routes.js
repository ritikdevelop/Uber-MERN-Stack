const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
      body("FullName.firstName")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
  ],
  userController.registerUser
);

module.exports = router;
