const tc = require('./database/connection')
const express = require('express');
const cors = require('cors');

const port = 3106;
const app = express();

app.use(cors({
  origin: "*"
}));

app.get('/', (req, res) => {
  res.json({
    str: "Hello World"
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});