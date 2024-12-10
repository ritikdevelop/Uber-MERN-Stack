const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const auth = require("../middleware/auth.middleware");

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

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password length should be or equal to 6 letters"),
  ],
  userController.loginUser
);


router.get('/profile', authMiddleware.authUser, userController.getUserProfile);

module.exports = router;
