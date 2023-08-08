import passport from "passport";
import 'dotenv/config';
import { Strategy as GoogleStrategy } from "passport-google-oauth20"

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET_ID,
    callbackURL: "http://localhost:8000/google/callback",
    passReqToCallback   : true
  }, (request, accessToken, refreshToken, profile, done) => {
    const data = JSON.stringify({token: accessToken, profile: profile});
      console.log(data)
      return done(null, profile); 
  }
));

export default passport;
