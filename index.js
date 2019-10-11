const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
// tMudnKqMo11nHu1F
// mongodb+srv://sabit-prod:tMudnKqMo11nHu1F@emaily-prod-jhr44.mongodb.net/feedback-prod?retryWrites=true&w=majority
mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => console.log('Error on start: ' + err.stack));

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // immediately calls

const PORT = process.env.PORT || 5000;
console.log('PORT is: ', PORT);
app.listen(PORT);
