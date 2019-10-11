const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  console.log('user in serialize: ', user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  console.log('run this passport') ||
    new GoogleStrategy( // Strategy with name 'google'
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, done) => {
        console.log('accessToken: ', accessToken);
        console.log('profile: ', profile.id);
        User.findOne({ googleId: profile.id }).then(existingUser => {
          if (existingUser) {
            done(null, existingUser); // first: error, second: user record
          } else {
            new User({ googleId: profile.id })
              .save()
              .then(user => done(null, user));
          }
        });
      }
    )
);
