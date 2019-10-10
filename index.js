const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);  // immediately calls

const PORT = process.env.PORT || 5000;
console.log('PORT is: ', PORT);
app.listen(PORT);
