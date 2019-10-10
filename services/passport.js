const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

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
        console.log('profile: ', profile);      }
    )
);
