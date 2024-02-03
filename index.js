const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello new World 4');
})

module.exports = app;
