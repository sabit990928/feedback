const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('hi there');
  res.send({ hi: 'there' });
});

app.listen(5000);
