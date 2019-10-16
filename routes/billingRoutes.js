const keys = require('../config/keys');
// eslint-disable-next-line
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    // there is could many middlewares ^^^
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$ for 1 credit',
      source: req.body.id,
    });
    req.user.credits += 5;
    const user = await req.user.save(); // asynchronous request
    res.send(user);
    console.log('charge: ', charge);
  });
};
