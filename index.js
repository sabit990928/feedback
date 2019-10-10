const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('hi there');
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
