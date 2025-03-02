const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/User');

// Export a function that takes passport as an argument
module.exports = (passport) => {
  // hqdi dyql googl 
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,//hadi hiya khaliha globale hit dayraha f .env 
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/api/oauth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        const { id, displayName, emails } = profile;
        const email = emails[0].value;

        let user = await User.findOne({ email });

        if (!user) {
          user = new User({
            name: displayName,
            email,
            googleId: id,
          });
          await user.save();
        }

        done(null, user);
      }
    )
  );

  //hadi github
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: '/api/oauth/github/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        const { id, displayName, emails } = profile;
        const email = emails[0].value;

        let user = await User.findOne({ email });

        if (!user) {
          user = new User({
            name: displayName,
            email,
            githubId: id,
          });
          await user.save();
        }

        done(null, user);
      }
    )
  );

  // hadi facebook
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: '/api/oauth/facebook/callback',
        profileFields: ['id', 'displayName', 'email'],
      },
      async (accessToken, refreshToken, profile, done) => {
        const { id, displayName, emails } = profile;
        const email = emails[0].value;

        let user = await User.findOne({ email });

        if (!user) {
          user = new User({
            name: displayName,
            email,
            facebookId: id,
          });
          await user.save();
        }

        done(null, user);
      }
    )
  );

  // Serialize and deserialize user
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  });
};