import passport from "passport";
import "dotenv/config";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import UserModel from "./models/userModel.js";

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_ID,
      callbackURL: "http://localhost:8000/google/callback",
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      const exists = await UserModel.exists({ id: profile.id });
      if (!exists) {
        new UserModel({
          id: profile.id,
          email: profile.emails[0].value,
          name: profile.displayName,
          token: accessToken
        }).save();  
      } else {
        await UserModel.findOneAndUpdate(
          { id: profile.id },
          { $set: { token: accessToken } },
        );
      }  
      return done(null, profile);
    }
  )
);

export default passport;
