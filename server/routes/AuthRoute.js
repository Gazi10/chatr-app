import express from "express";
import passport from "passport";
import UserModel from "../models/userModel.js";

const CLIENT_URL = "http://localhost:3000/";

const router = express.Router();

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user,
      // cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", async (req, res) => {
  await UserModel.findOneAndUpdate(
    { id: req.user.id },
    { $set: { token: '' } },
  );
  req.session = null;
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get(
  "/login",
  passport.authenticate("google", {
    scope: [
      "profile",
      "email",
      "https://www.googleapis.com/auth/gmail.readonly",
      "https://www.googleapis.com/auth/gmail.send",
    ],
    prompt: "select_account",
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

export default router;
